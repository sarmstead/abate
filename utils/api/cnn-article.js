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
            responseObject.title = $('h2').text();
            responseObject.authors = $('#byline').text().replace('By ', '').replace(', CNN', '');
            responseObject.source = 'CNN';
            responseObject.link = cnnUrl;
            
            let startDateIndex;
            let endDateIndex;
            for (let i = 0; i < html.length; i++) {
                if (html.charAt(i) === '>' && html.charAt(i+1) === 'U' && html.charAt(i+2) === 'p' && html.charAt(i+3) === 'd') {
                    startDateIndex = i + 1;
                }

                if (html.charAt(i) === 'M' && html.charAt(i+1) === 'T' && html.charAt(i+2) === '<') {
                    endDateIndex = i + 2;
                }
            }
            const datePublished = new Date(Date.parse(html.substring(startDateIndex, endDateIndex).replace('Updated: ', '')));
            const dateRetrieved = new Date(Date.now());
            responseObject.date = { published: datePublished, retrieved: dateRetrieved };

            responseObject.editorsNote = $('#editorsNote').text().replace("Editor's Note: ", '');
            $('.afe4286c p').each(function() {
              switch($(this).attr('id')) {
                case 'byline':
                  return;
                case 'published datetime':
                  return;
                case 'source':
                  return;
                case 'editorsNote':
                  return;
                default:
                  contentArray.push($(this).text());
              }
            })
            responseObject.content = contentArray;

            responses.push(responseObject);
            return responses;

      })
    )
  })
}

export default getCNNArticle