import parse from 'html-react-parser'
import DOMPurify from 'isomorphic-dompurify'

export const safeParse = (value: string) => {
  const clean = DOMPurify.sanitize(value, { ALLOWED_TAGS: ['b', 'a'] })
  return parse(clean)
}
