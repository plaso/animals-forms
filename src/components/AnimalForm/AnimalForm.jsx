import React, { Component } from 'react'

const INITIAL_STATE = {
  name: '',
  specie: '',
  img: ''
}

class AnimalForm extends Component {
  state = {...INITIAL_STATE}
  
  handleOnChange = (event) => {
    console.log(event)
    const { value, name } = event.target // dog - specie

    this.setState({ [name]: value }) // meter entre corchetes una variable para hacer el key dinamico
  }

  onSubmit = (event) => {
    event.preventDefault() // Para evitar el comportamiento por defecto de un form, que seria hacer peticion get y nos refrescaria la pagina

    this.props.createAnimal(this.state)
    this.setState({...INITIAL_STATE})
  }

  render() {
    const { name, specie, img } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="name" id="name"
          value={name} onChange={this.handleOnChange}
          placeholder="Name of the animal"
          required
        />
        <input
          name="specie" id="specie"
          value={specie} onChange={this.handleOnChange}
          placeholder="Specie of the animal"
        />
        <input
          name="img" id="img"
          value={img} onChange={this.handleOnChange}
          placeholder="Img url of the animal"
        />

        <button>Submit</button>
      </form>
    )
  }
}

export default AnimalForm