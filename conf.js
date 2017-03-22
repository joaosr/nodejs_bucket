exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['homepageSpec.js'],
    capabilities: {
    	browserName: 'chrome'
    	// 'chromeOptions': {
    	// 	'loggingPrefs':{
    	// 		'browser': 'ALL'
    	// 	}
    	// }
    }
}