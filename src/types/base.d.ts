type ArticleJson = {
  title: string
  content: ArticleContent[]
}

type ArticleContent =
  | InformationContent
  | ImageContent
  | TipsContent
  | VideoContent

type InformationContent = {
  title?: string
  type: 'information'
  paragraphs: string[]
}

type ImageContent = {
  type: 'image'
  src: string
}

type TipsContent = {
  type: 'tips'
  title: string
  tips: string[]
  icon: string
}

type VideoContent = {
  type: 'video'
  text: string
  src: string
}

type ArticlePreview = {
  url: string
  title: string
  content_type: ContentType
  topic: string
  image: string
  read_time: string
}

type SelectOption = {
  label: string
  value: any
}

type ContentType = {
  label: string
  value: string
  icon: string
}

type TopicDescription = {
  topic: string
  description: string
}
