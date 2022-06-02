import getCNNLinks from '../../../../utils/api/cnn-links';

const cnnUrl = 'https://lite.cnn.com';

const handler = async (req, res) => {
    const { num } = req.query;

    try {
        const links = await getCNNLinks(cnnUrl, num);
        res.status(200).json({ links, total: links.length });
    }
    catch (error) {
        res.status(500).send({ error: `Failed to fetch link paths from ${cnnUrl}: ${error}` })
    }
}

export default handler;