export const getNextOrPreviousArticle = (
  articles: ArticlePreview[],
  title: string
) => {
  const currentArticle = articles.find((item) => item.title === title)

  const index = currentArticle ? articles.indexOf(currentArticle) : 0

  const nextArticle = articles[index + 1]

  const previousArticle = articles[index - 1]

  return { nextArticle, previousArticle }
}
