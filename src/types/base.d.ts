type ArticleJson = {
  title: string
  content: ArticleContent[]
}

type ArticleContent =
  | InformationContent
  | ImageContent
  | TipsContent
  | VideoContent
  | TextWithImageContent
  | ListContent

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
  title?: string
  bold_text?: string
  tips: string[]
  icon?: string
}

type VideoContent = {
  type: 'video'
  text?: string
  src: string
}

type TextWithImageContent = {
  type: 'text_with_image'
  background: boolean
  content: TextWIthImageData[]
}

type TextWIthImageData = { image: string; text: string }

type ListContent = {
  type: 'list'
  title: string
  content: string[]
}

type ArticlePreview = {
  url: string
  title: string
  content_type: ContentType
  preview_text: string
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
