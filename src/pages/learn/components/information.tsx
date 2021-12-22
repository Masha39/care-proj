export const Information = ({
  title,
  paragraphs
}: {
  title: string
  paragraphs: string[]
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {paragraphs.map((el, index) => {
        return <p key={index}>{el}</p>
      })}
    </div>
  )
}
