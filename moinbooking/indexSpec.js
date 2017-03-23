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
        element(by.css("#hourly-tab")).click();
        var secondLeg = element(by.css("#second-leg"));
        expect(secondLeg.isPresent()).toBeTruthy();
    });
    it('Should one-leg data (pickup,dropoff,at_date,at_time) required for oneway book', function() {
        element(by.css("#oneway-tab")).click();
        expect(hasClass(element(by.name('booking_request_form')), 'ng-invalid')).toBeTruthy();
        element(by.model('pickup')).sendKeys('Berlin');
        element(by.model('dropoff')).sendKeys('Potsdam');
        element(by.model('at_date')).sendKeys('05/04/2017');
        element(by.model('at_time')).sendKeys('23:45');
        expect(hasClass(element(by.name('booking_request_form')), 'ng-valid')).toBeTruthy();
    });

    it('Should two-leg data (pickup,dropoff,at_date,at_time,return_pickup,return_dropoff,return_at_date,return_at_time) required for hourly book', function() {
        element(by.css("#hourly-tab")).click();
        expect(hasClass(element(by.name('booking_request_form')), 'ng-invalid')).toBeTruthy();
        element(by.model('pickup')).sendKeys('Berlin');
        element(by.model('dropoff')).sendKeys('Potsdam');
        element(by.model('at_date')).sendKeys('05/04/2017');
        element(by.model('at_time')).sendKeys('23:45');
        expect(hasClass(element(by.name('booking_request_form')), 'ng-invalid')).toBeTruthy();
        element(by.model('return_pickup')).sendKeys('Potsdam');
        element(by.model('return_dropoff')).sendKeys('Berlin');
        element(by.model('return_at_date')).sendKeys('06/05/2017');
        element(by.model('return_at_time')).sendKeys('13:30');
        expect(hasClass(element(by.name('booking_request_form')), 'ng-valid')).toBeTruthy();
    });
});
