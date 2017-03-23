exports.config = {
    directConnect: true,

    specs: ['indexSpec.js'],

    capabilities: {
    	browserName: 'chrome',
      chromeOptions: {
            args: ['allow-file-access-from-files']
      }
    },

    baseUrl: 'file://'+__dirname+'/index.html',

    onPrepare: function(){
        browser.resetUrl = 'file://';
    },

    allScriptsTimeout: 30000
}
