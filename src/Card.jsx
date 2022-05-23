import "./styles.css"

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.avatar} alt="imagess" />
      <div className="placeHolder">{item.first_name}</div>
      <div className="text">{item.email}</div>
    </div>
  )
}

export default Card
