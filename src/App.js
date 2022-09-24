import React, { Component } from 'react'
import { Layout, Typography, Button } from 'antd'
import animalsJSON from './animals.json'
import AnimalsList from './components/AnimalsList/AnimalsList';
import AnimalForm from './components/AnimalForm/AnimalForm';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const { Content } = Layout
const { Title } = Typography;

class App extends Component {
  state = {
    animals: [...animalsJSON],
    searchText: '',
    showForm: true,
  }

  createAnimal = (animal) => {
    const animalToCreate = {
      ...animal,
      id: uuidv4() // paquete para generar un id, para que no nos salte el error de las keys de react
    }

    this.setState({ animals: [animalToCreate, ...this.state.animals] })
  }

  handleSearch = (event) => {
    const { value } = event.target

    this.setState({ searchText: value })
  }

  getAnimalsToRender = () => {
    const { animals, searchText } = this.state

    if (searchText) { // '' -> falsy
      return animals.filter(animal => {
        return animal.name.toLowerCase().includes(searchText.toLowerCase())
          || animal.specie.toLowerCase().includes(searchText.toLowerCase())
      })
    }
    return animals
  }

  onDeleteAnimal = (id) => {
    this.setState(prevState => ({
      animals: prevState.animals.filter(animal => animal.id !== id)
    }))
  }

  toggleShowForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  render() {
    const { searchText, showForm } = this.state

    const animals = this.getAnimalsToRender()

    return (
      <div className="App">
        <Layout>
          <Content style={{ padding: '0 50px', minHeight: '100vh' }}>
            <label htmlFor="search">
              Search:
            </label>
            <input id="search" name="search" value={searchText} onChange={this.handleSearch} />


            { showForm && (
              <AnimalForm createAnimal={this.createAnimal} />
            )}

            <Button onClick={this.toggleShowForm}>
              {showForm ? 'Hide' : 'Show'} form
            </Button>

            <Title>Animals list</Title>

            <AnimalsList animals={animals} onDeleteAnimal={this.onDeleteAnimal} />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
