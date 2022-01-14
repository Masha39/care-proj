export const getPreviewText = (article: ArticleJson) => {
  const paragraphs = article.content.find((item) => item.type === 'information')

  if (paragraphs?.type === 'information') {
    return { previewText: paragraphs.paragraphs[0] }
  }

  return { previewText: '' }
}
