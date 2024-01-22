import '../styles/Pokedex.css';

const PokeCard = ({id, name, poke_image})=>{

    return(
        <div className="poke_card">
            <div className="poke_card_info">
                <p>{id >= 10 ? "#0" + id : "#00"+id}</p>
                <h3> {name}</h3>
            </div>
            <div className="poke_card_image">
                <img src={poke_image} alt={name} />
            </div>
        </div>
    )

}

export default PokeCard