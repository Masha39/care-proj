export const getPreviewText = (article: ArticleJson) => {
  const paragraphs = article.content.find(
    (item) => item.type === 'information'
  ) as InformationContent

  return { previewText: paragraphs.paragraphs[0] }
}
