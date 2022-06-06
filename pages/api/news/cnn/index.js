import getCNNLinks from '../../../../utils/api/cnn-links';
import getCNNArticle from '../../../../utils/api/cnn-article';

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
                await getCNNArticle(pathArray[i])
            )
        }
        
        // Remove null indicies
        for (let i = 0; i < responses.length; i++) {
            if (!responses[i]) {
                responses.splice(i, 1);
            }
        }

        res.status(200).json({ articles: responses, total: responses.length })
    }
    catch(error) {
        res.status(500).send({ error: `Failed to fetch data from ${cnnUrl}: ${error}` })
    }    
}

export default handler;