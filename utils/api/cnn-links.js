const axios = require('axios');
const cheerio = require('cheerio');

const getCNNLinks = (cnnUrl, num) => {
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
                if (num) {
                    endPointArray.length = num;
                }

                // Filter out null indicies
                endPointArray = endPointArray.filter(link => {
                  if (link) {
                      return link;
                  }
                })

                return endPointArray;
            }).catch(error => {
                return error;
            })
        )
    })
}

export default getCNNLinks;