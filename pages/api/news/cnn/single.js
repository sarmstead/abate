import getCNNArticle from '../../../../utils/api/cnn-article'

const handler = async (req, res) => {
  const { id } = req.query
  const endpoint = `https://lite.cnn.com/en/article/${id}`

  try {
    const article = await getCNNArticle(endpoint)
    res.status(200).json({ article: article })
  }
  catch (error) {
    res.status(500).send({ error: `Failed to fetch CNN article ID: ${id}: ${error}` })
  }
}

export default handler;