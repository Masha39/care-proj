import Image from 'next/image'

export const Picture = ({ src, alt }: { src: string; alt: string }) => {
  return <Image alt={alt} src={src} width="100px" height="100px" />
}
