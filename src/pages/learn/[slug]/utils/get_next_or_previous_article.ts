export const getNextOrPreviousArticle = (
  articles: ArticlePreview[],
  title: string
): {
  nextArticle: ArticlePreview | undefined
  prevArticle: ArticlePreview | undefined
} => {
  const index = articles.findIndex((item) => item.title === title)

  return { nextArticle: articles[index + 1], prevArticle: articles[index - 1] }
}
