export const getNextTopicArticles = (
  articlesByTopic: Record<string, ArticlePreview[]>,
  prevTopic: string
) => {
  const index = Object.entries(articlesByTopic).findIndex(
    ([topic]) => topic === prevTopic
  )

  const nextTopicArticles = Object.values(articlesByTopic)[index + 1] || []
  const nextTopic = Object.keys(articlesByTopic)[index + 1] || ''

  return { nextTopicArticles, nextTopic }
}
