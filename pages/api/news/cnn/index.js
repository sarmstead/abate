const axios = require('axios');
const cheerio = require('cheerio');
import getCNNLinks from '../../../../utils/api/cnn-links';

const cnnUrl = 'https://lite.cnn.com';

const handler = async (req, res) => {
    try {
        const responses = [];
        const fullArray = await getCNNLinks(cnnUrl)
        let pathArray = fullArray.map(path => {
            return cnnUrl + path.link;
        })

        for (let i = 0; i < pathArray.length; i++) {
            responses.push(
                await axios(pathArray[i])
                    .then(pageData => {
                        let responseObject = {};
                        let contentArray = [];
                        const html = pageData.data;
                        const $ = cheerio.load(html)
                        responseObject.title = $('h2').text();
                        responseObject.byline = $('#byline').text();

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
                        responseObject.date = html.substring(startDateIndex, endDateIndex);

                        responseObject.editorsNote = $('#editorsNote').text();
                        $('.afe4286c p').each(function() {
                            contentArray.push($(this).text())
                        })
                        responseObject.content = contentArray;
                        responses.push(responseObject)
                    })
            )
        }
        
        // Remove null indicies
        for (let i = 0; i < responses.length; i++) {
            if (!responses[i]) {
                responses.splice(i, 1);
            }
        }

        res.status(200).json({ articles: responses })
    }
    catch(error) {
        res.status(500).send({ error: `Failed to fetch data from ${cnnUrl}: ${error}` })
    }    
}

export default handler;