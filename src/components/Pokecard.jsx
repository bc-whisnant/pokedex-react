import React, { Component } from 'react'
import './Pokecard.css'
/* less fancy images
 * const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
 * 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png'
 * fancy images - requires function to work properly
 */
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padThree = (num) => {
  return num <= 999 ? String(num.padStart('3', 0)) : num
}

export default class Pokecard extends Component {

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
  
  render() {

    let imgSrc = `${POKE_API}${padThree(this.props.id)}.png`
    const {name, type, exp} = this.props
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img src={imgSrc} alt="pokemon"/>
       <div className="Pokecard-data">Type: { type }</div>
       <div className="Pokecard-data">EXP: { exp }</div>

      </div>
    )
  }
}

/*
 * less efficient way of adding image
 let baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
 <img src={`${baseImgUrl}${this.props.id}.png`} alt=""/>
 */
