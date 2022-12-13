import { Link } from "react-router-dom";

function Card({person}) {
    return(
      <div>
        <img class="card-image" alt={person.name} src={person.imgPath} />
        <div>
          <h2>{person.name}</h2>
        </div>
        <button class="card-button"><Link to={person.url} class="card-button_text">ИНФОРМАЦИЯ</Link></button>
      </div>
    );
  }
  
  export default Card;