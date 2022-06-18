const pupeteer = require("puppeteer");

(async () => {
  try {
    const browser = await pupeteer.launch({ headless: true});
    const page = await browser.newPage();
    // await page.setViewport({width: 100, height: 100});
    await page.goto("https://elmiriyounes.github.io/hangman");
    // await page.$ equals to document.querySelector
    // await page.$$ equals to document.querySelectorAll
    // or to use as javascript syntax:
    // await page.evaluate(()=>document.querySelector(''))
    // await page.evaluate(()=>document.querySelectorAll(''))
    // await element.evaluate((el)=> el.style.color = 'red')
  } catch (error) {
    console.error("Error: ", error);
  }
})();

// (async () => {
//   await pupeteer
//     .launch({ headless: false })
//     .then(async (browser) => {
//       const page = await browser.newPage();
//       await page.goto("https://www.google.com/");
//       console.log("its showing");
//     })
//     .catch((err) => console.error("Error: ", err));
// })();
