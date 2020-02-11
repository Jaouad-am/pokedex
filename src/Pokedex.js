import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render(){
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <p>Total Experience: {this.props.xp}</p>
                <p>{this.props.isWinner ? "Winner" : "Loser"}</p> 
                <div className="Pokedex-cards">
                {this.props.pokemons.map(p=>(
                    <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} xp={p.base_experience} />
        ))}
                </div>
                
            </div>
        )
    }
}

export default Pokedex;