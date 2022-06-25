const pupeteer = require("puppeteer");

(async () => {
  try {
    const browser = await pupeteer.launch({ headless: false });
    const page = await browser.newPage();
    // await page.setViewport({width: 100, height: 100});
    await page.goto("https://elmiriyounes.github.io/hangman/"); //localhost golive parcel (npm run goLive)
    // await page.$ equals to document.querySelector
    // await page.$$ equals to document.querySelectorAll
    // or to use as javascript syntax:
    // await page.evaluate(()=>document.querySelector(''))
    // await page.evaluate(()=>document.querySelectorAll(''))
    // await element.evaluate((el)=> el.style.color = 'red')
    const wordContainer = await page.$(".word-container");
    const hiddenWord = await wordContainer.evaluate((e) =>
      e.getAttribute("hidden-word")
    );
    let btnsKeyboard = await page.$$(".letter-keyboard");
    
    console.log(btnsKeyboard);
    for (const char of hiddenWord) {
      let found = false;
      let i = 0;
      while (!found) {
        let letterKeyboard = await btnsKeyboard[i].evaluate((btn) => {
          return btn.innerHTML;
        });
        letterKeyboard === char ? (found = true) : i++;
      }
      await page.waitForTimeout(2000);
      await btnsKeyboard[i].click();
    }
    await page.waitForTimeout(1000);
    await (await page.$(".reset")).click();
    await page.waitForTimeout(1000);
    btnsKeyboard = await page.$$(".letter-keyboard");
    for (const btn of btnsKeyboard) {
      await btn.click();
      await page.waitForTimeout(2000);
    }
    await page.waitForTimeout(3000);
    await page.$(".reset").click();
    await page.waitForTimeout(5000);
    await browser.close();
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
