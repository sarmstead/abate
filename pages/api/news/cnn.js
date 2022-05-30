const axios = require('axios');
const cheerio = require('cheerio');

const cnnUrl = 'https://lite.cnn.com';

const getPaths = () => {
    return new Promise((resolve) => {
        resolve(
            axios(cnnUrl)
            .then(response => {
                let endPointArray = [];
                const html = response.data;
                const $ = cheerio.load(html);
                $('li a').each(function() {
                    endPointArray.push(`${cnnUrl}${$(this).attr('href')}`)
                })
                return endPointArray;
            }).then(endPointArray => {
                return endPointArray
            }).catch(error => {
                return error
            })
        )
    })
        

}

const handler = async (req, res) => {
    try {
        const responses = [];
        const pathArray = await getPaths()
        // TO DO: change 3 to pathArray.length to get all articles
        for (let i = 0; i < 3; i++) {
            responses.push(
                await axios(pathArray[i])
                    .then(pageData => {
                        let responseObject = {};
                        let contentArray = [];
                        const html = pageData.data;
                        const $ = cheerio.load(html)
                        responseObject.title = $('h2').text();
                        responseObject.byline = $('#byline').text();
                        responseObject.date = $('#datetime').text();
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