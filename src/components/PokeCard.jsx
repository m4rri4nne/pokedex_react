const PokeCard = ({id, region, name, poke_image})=>{
    return(
        <div className="poke_card">
            <div className="poke_card_info">
                <p>{id}</p>
                <h3> {name}</h3>
                <p> {region} </p>
            </div>
            <div className="poke_card_image">
                <p>{poke_image}</p>
            </div>
        </div>
    )

}

export default PokeCard