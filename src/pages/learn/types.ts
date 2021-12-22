export type ArticleJson = {
  title: string
  content: ArticleContent[]
}

export type ArticleContent = InformationContent | ImageContent

type InformationContent = {
  title: string
  type: 'information'
  paragraphs: string[]
}

type ImageContent = {
  type: 'image'
  src: string
}

export type ArticlePreview = {
  url: string
  title: string
  content_type: string
  article_type: string
}
