function Card(props) {
	return (
		<div className="Card">
			<h2>{props.name}</h2>
			{/* <img src={imgSrc} alt={props.name}></img> */}
			<img src={props.image} alt={props.name}></img>
		</div>
	);
}

export default Card;
