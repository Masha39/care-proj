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
  | ZoneContent
  | ToolPreviewContent

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
  content: TextWithImageData[]
}

type TextWithImageData = { image: string; text: string }

type ListContent = {
  type: 'list'
  title?: string
  content: string[]
}

type ZoneContent = {
  type: 'zone'
  label: ZoneLabel
  content: string[]
}

type ToolPreviewContent = {
  type: 'tool_preview'
  title: string
  images: ImagesData[]
}

type ImagesData = { url: string; description?: string }

type ZoneLabel = 'green' | 'yellow' | 'red'

type ArticlePreview = {
  url: string
  title: string
  content_type: ContentType
  preview_text: string
  topic: string
  description?: string
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

type Column = {
  name: string
  links: { link: string; title: string }[]
  title: string
}
