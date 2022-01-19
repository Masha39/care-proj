import styles from './picture.module.scss'

export const Picture = ({ src, alt }: { src: string; alt: string }) => {
  return <img className={styles.picture} alt={alt} src={src} />
}
