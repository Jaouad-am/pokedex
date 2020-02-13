import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render(){
        let winner;
        if(this.props.isWinner) {
           winner = <h1 className='Pokedex-winner'>Winner !</h1>;
        }
        else {
           winner = <h1 className='Pokedex-loser'>Loser !</h1>;
        }
        return (
            <div className="Pokedex">
                {winner}
                <h4>Total Experience: {this.props.xp}</h4>
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