const axios = require('axios');
const cheerio = require('cheerio');
import getCNNLinks from '../../../../utils/api/cnn-links';

const cnnUrl = 'https://lite.cnn.com';

const handler = async (req, res) => {
    const { num } = req.query;

    try {
        res.status(200).json({ links: await getCNNLinks(cnnUrl, num) })
    }
    catch (error) {
        res.status(500).send({ error: `Failed to fetch link paths from ${cnnUrl}: ${error}` })
    }
}

export default handler;