const request = require('request');
const cheerio = require('cheerio');

request('https://www.bhphotovideo.com/c/product/1459304-REG/microsoft_pgu_00001_13_5_surface_book_2.html', (error, response, html) => {
  if(!error && response.statusCode == 200) {
    //console.log(html);
    const $ = cheerio.load(html);
    const productInfo = $('.container_1ah2-FqCRqaBHAIFmuW1m3');
    //console.log(productInfo.html());
    console.log(productInfo.text());
  }
});

request('https://www.bhphotovideo.com/c/product/1459304-REG/microsoft_pgu_00001_13_5_surface_book_2.html/reviews', (error, response, html) => {
  if(!error && response.statusCode == 200) {
    //console.log(html);
    const $ = cheerio.load(html);
    const productReviews = $('.desc_Jy1ODKM10ytF87QZM2xBd');
    //console.log(productReviews.html());
    console.log(productReviews.text());
  }
});
