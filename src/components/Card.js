import "./Card.css";

//I forgot why we did this card component
//I suppose it's to show how we can wrap around another component
function Card(props){
    const classes = 'card ' + props.className;
    return <div className ={classes}>{props.children}</div>;
}

export default Card;