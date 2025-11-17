interface CardProps {
  image: string
  title: string
  description: string
}

function Card({ image, title, description }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card

