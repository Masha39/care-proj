export interface Topic {
  articles: ArticlePreview[]
  description: string
}

export const getTopicsToShow = (
  articlesByTopic: Record<string, ArticlePreview[]>,
  topic: string,
  defaultTopic: string,
  contentType: string,
  defaultContentType: string,
  descriptions: TopicDescription[]
): Record<string, Topic> => {
  const filteredTopics =
    topic === defaultTopic
      ? articlesByTopic
      : { [topic]: articlesByTopic[topic] }

  return Object.keys(filteredTopics).reduce<Record<string, Topic>>(
    (acc, topicName) => {
      const description =
        descriptions.find((t) => t.topic === topicName)?.description || ''

      if (contentType === defaultContentType) {
        acc[topicName] = {
          description,
          articles: articlesByTopic[topicName]
        }
      } else {
        acc[topicName] = {
          description,
          articles: articlesByTopic[topicName].filter(
            (article) => article.content_type.value === contentType
          )
        }
      }

      return acc
    },
    {}
  )
}
