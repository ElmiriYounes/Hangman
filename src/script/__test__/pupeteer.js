const pupeteer = require("puppeteer");

(async () => {
  try {
    const browser = await pupeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://elmiriyounes.github.io/hangman");
    // await page.$ equals to document.querySelector
    // await page.$$ equals to document.querySelectorAll
    let sections = await page.$$("div");
    console.log(sections.length);
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
