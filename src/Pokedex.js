import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render(){
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                Total Experience: {this.props.xp}
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