const axios = require('axios');
const cheerio = require('cheerio');

const getCNNArticle = (cnnUrl) => {
  return new Promise((resolve) => {
    resolve(
      axios(cnnUrl)
        .then(pageData => {
            let responses = [];
            let responseObject = {};
            let contentArray = [];
            const html = pageData.data;
            const $ = cheerio.load(html)
            responseObject.title = $('.headline').text();
            responseObject.authors = $('.byline--lite').text();
            responseObject.source = 'CNN';
            responseObject.link = cnnUrl;

            const dateUpdated = $('.timestamp--lite').text().replace('Updated: ', '').trimEnd().trimStart()
            responseObject.date = dateUpdated;

            $('.article--lite .paragraph--lite').each(function() {
              if($(this).text() === 'See Full Web Article') {
                return
              }
              contentArray.push($(this).text());
            })
            responseObject.content = contentArray;

            responses.push(responseObject);
            return responses;

      })
    )
  })
}

export default getCNNArticle
