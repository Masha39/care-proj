import styles from './video.module.scss'

export const Video = ({ src, text }: { src: string; text: string }) => {
  return (
    <>
      <p className={styles.video__text}>{text}</p>
      <div className={styles.video}>
        <iframe
          className={styles.video__content}
          src={src}
          title="YourCare video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  )
}
