import './Card.css';
function Card(props) {
	return (
		<div className="Card">
			<h2>{props.name}</h2>
			<img src={props.image} alt={props.name}></img>
		</div>
	);
}

export default Card;
