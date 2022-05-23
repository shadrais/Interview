import "./styles.css"

const Card = ({ item }) => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom , rgba(76, 0, 255, 0))`,
  }

  return (
    <div className="card">
      {/* <div style={backgroundStyle}></div> */}
      <img style={backgroundStyle} src={item.avatar} alt="imagess" />
      <div className="placeHolder">{item.first_name}</div>
      <div className="text">{item.email}</div>
    </div>
  )
}

export default Card
