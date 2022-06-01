const axios = require('axios');
const cheerio = require('cheerio');

const getCNNLinks = (cnnUrl) => {
    return new Promise((resolve) => {
        resolve(
            axios(cnnUrl)
            .then(response => {
                let endPointArray = [];
                const html = response.data;
                const $ = cheerio.load(html);
                $('li a').each(function() {
                    let individualLink = {
                        title: $(this).text(),
                        link: $(this).attr('href')
                    }
                    endPointArray.push(individualLink);
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

export default getCNNLinks;