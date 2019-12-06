README!

This SEO bot can be started by running the batch file "SEOBot.bat"
It's dependenciest include- NodeJS and TestCafe. These have already been installed on the VM so don't mind that.
It can be scheduled to run intermittently using Windows Task Scheduler- I can set this up if you need.

The variables you can change are at the top of the app.js file. These include:
sessionTime (in microsecs- currently set at 5 mins)
terms (all search terms you want to boost)
exclusionLink (this is the title that the bot searches for on google)

Note- reasons the bot may fail:
1. 	Any issues with the proxy will fail the test (proxy server is in a foreign language, proxy is too slow).
2. 	If the search terms are too vague the bot will keep looking until the google results are exhausted.
4. 	If you use the proxy server too much, your IP will be disabled for a while.