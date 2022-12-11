function Card({person}) {
    return(
      <div>
        <img alt={person.name} src={person.imgPath} />
        <div>
          <h2>{person.name}</h2>
        </div>
        <button src={person.url}>ИНФОРМАЦИЯ</button>
      </div>
    );
  }
  
  export default Card;