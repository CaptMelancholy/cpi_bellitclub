import { Link } from "react-router-dom";

function Card({person}) {
    return(
      <div>
        <img alt={person.name} src={person.imgPath} />
        <div>
          <h2>{person.name}</h2>
        </div>
        <button><Link to={person.url}>ИНФОРМАЦИЯ</Link></button>
      </div>
    );
  }
  
  export default Card;