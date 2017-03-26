var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};
describe('MoinBooking', function() {
    beforeEach(function() {
      browser.get('');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('MoinBooking');
    });

    it('Should hide second-leg when oneway tab clicked', function() {
        element(by.css("#oneway-tab")).click();
        var secondLeg = element(by.css("#second-leg"));
        expect(secondLeg.isPresent()).toBeFalsy();
    });

    it('Should show second-leg when hourly tab clicked', function() {
        element(by.css("#twoway-tab")).click();
        var secondLeg = element(by.css("#second-leg"));
        expect(secondLeg.isPresent()).toBeTruthy();
    });

    it('Should one-leg data (pickup,dropoff,at_date,at_time) required for oneway book', function() {
        element(by.css("#oneway-tab")).click();
        expect(hasClass(element(by.name('booking_request_form')), 'ng-invalid')).toBeTruthy();
        element(by.model('pickup')).sendKeys('tegel airport, berlin');
        element(by.model('dropoff')).sendKeys('schönefeil airport, berlin');
        element(by.model('at_date')).sendKeys('2017-04-12');
        element(by.model('at_time')).sendKeys('12:45');
        expect(hasClass(element(by.name('booking_request_form')), 'ng-valid')).toBeTruthy();
    });

    it('Should two-leg data (pickup,dropoff,at_date,at_time,return_pickup,return_dropoff,return_at_date,return_at_time) required for hourly book', function() {
        element(by.css("#twoway-tab")).click();
        expect(hasClass(element(by.name('booking_request_form')), 'ng-invalid')).toBeTruthy();
        element(by.model('pickup')).sendKeys('tegel airport, berlin');
        element(by.model('dropoff')).sendKeys('schönefeil airport, berlin');
        element(by.model('at_date')).sendKeys('2017-04-12');
        element(by.model('at_time')).sendKeys('12:45');
        expect(hasClass(element(by.name('booking_request_form')), 'ng-invalid')).toBeTruthy();
        element(by.model('return_pickup')).sendKeys('schönefeil airport, berlin');
        element(by.model('return_dropoff')).sendKeys('tegel airport, berlin');
        element(by.model('return_at_date')).sendKeys('2017-05-30');
        element(by.model('return_at_time')).sendKeys('19:20');
        expect(hasClass(element(by.name('booking_request_form')), 'ng-valid')).toBeTruthy();
    });

    it('Should submit a book ride for one-leg ride', function() {
        element(by.css("#oneway-tab")).click();
        element(by.css("#book_ride")).click();
        element(by.model('pickup')).sendKeys('tegel airport, berlin');
        element(by.css("#book_ride")).click();
        element(by.model('dropoff')).sendKeys('schönefeil airport, berlin');
        element(by.css("#book_ride")).click();
        element(by.model('at_date')).sendKeys('2017-04-12');
        element(by.css("#book_ride")).click();
        element(by.model('at_time')).sendKeys('12:45');
        element(by.css("#book_ride")).click();
        var alertSuccess = element(by.css(".alert-danger"));
        expect(alertSuccess.isPresent()).toBeTruthy();
    });

    it('Should submit a book ride for tow-leg ride', function() {
        element(by.css("#twoway-tab")).click();
        element(by.model('pickup')).sendKeys('tegel airport, berlin');
        element(by.model('dropoff')).sendKeys('schönefeil airport, berlin');
        element(by.model('at_date')).sendKeys('2017-04-12');
        element(by.model('at_time')).sendKeys('12:45');
        element(by.model('return_pickup')).sendKeys('schönefeil airport, berlin');
        element(by.model('return_dropoff')).sendKeys('tegel airport, berlin');
        element(by.model('return_at_date')).sendKeys('2017-05-30');
        element(by.model('return_at_time')).sendKeys('19:20');
        element(by.css("#book_ride")).click();
        var alertSuccess = element(by.css(".alert-danger"));
        expect(alertSuccess.isPresent()).toBeTruthy();
    });
});
