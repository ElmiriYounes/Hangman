const pupeteer = require('puppeteer')
// pupeteer jest

describe('Hangman', () => {
    beforeAll(async () => {
      await page.goto('https://elmiriyounes.github.io/hangman/');
    });
  
    it('title of page should be "Hangman"', async () => {
      await expect(page.title()).resolves.toMatch('Hangman');
    });

    test('should exists 26 letters', async () => {
      const btnsKeyboard = await page.$$('.letter-keyboard')
      await expect(btnsKeyboard.length).toBe(26)
    });

    test('hidden word length should be equals to numbers of li elements into .word-container', async ()=>{
      const lis = await page.$$('.word-container li');
      const hiddenWord = await page.$('.word-container');
      const lengthHiddenWord = await hiddenWord.evaluate((e)=> e.getAttribute('hidden-word').length);
      await expect(lengthHiddenWord).toBe(lis.length);
    });
  });