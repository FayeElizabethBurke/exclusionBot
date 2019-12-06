import { Selector } from 'testcafe';

let terms = ["electric fence station exclusionfence.com", "jva exclusion fence", "exclusion electric fence jva", 'mobile electric fence exclusionfence.com',"exclusionfence.com"],
sessionTime = 20000,
exclusionLink = Selector('span').withText('Electric exclusion fencing is better than mesh'),
    item = terms[Math.floor(Math.random() * terms.length)],
    pageTurn = 1,
    searchBar = Selector('input').withAttribute('title', 'Search'),
    nextPage = Selector('#pnnext'),
    consoleCheck,
    nextPageCheck,
    proxySearch = Selector('input').withAttribute('name', 'u');


//"monitored electric fence", "exclusion electric fence", "electric fence for dingo", 
fixture(`Exclusion Fence Bot`).page('https://www.free-proxy.com/');
test('Find site via proxy server.', async t => {
    await t
        .maximizeWindow()
        .click(proxySearch)
        .typeText(proxySearch, 'https://www.google.com.au')
        .pressKey('enter')
        .wait(5000)
        .click(searchBar)
        .typeText(searchBar, item)
        .pressKey('enter')
        .wait(4000)
consoleCheck = await exclusionLink.exists;
nextPageCheck = await nextPage.exists;

        if (consoleCheck === false && nextPageCheck === true){
            do {
                await t.wait(2000).click(nextPage)
                pageTurn++;
            } while (consoleCheck === false && nextPageCheck === true)
            if (consoleCheck === false && nextPageCheck === false){
               console.log("Google isn't even showing our site with " + item)
            } else {
               await t.click(exclusionLink).wait(sessionTime)
            }
        } else {
            await t.click(exclusionLink).wait(sessionTime)
        }
        console.log('Search term: ' + item + ', Found on page: ' + pageTurn)
});