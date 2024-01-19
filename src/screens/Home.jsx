import Menu from "../components/Menu";
import pokemons from "../assets/pokemons.png";
import items from "../assets/items.png";
import moves from "../assets/moves.png";
import your_team from "../assets/your_team.png";
import "../styles/Home.css";
import {NavLink} from "react-router-dom";

const Home = ()=>{
    return (
        <>
            <header className="header_home"> 
                <h1>Pokemon</h1>
            </header>
            <ul className="home_menu">
                <li>
                    <NavLink to="pokedex">
                        <Menu title="Pokemons" img={pokemons}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="items">
                        <Menu title="Items" img={items}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="moves">
                        <Menu title="Moves" img={moves}/>  
                    </NavLink>
                </li>
                <li>
                    <NavLink to="yourteam">
                        <Menu title="Your team" img={your_team}/>
                    </NavLink>
                    
                </li>
            </ul>
        </>
    )
}

export default Home