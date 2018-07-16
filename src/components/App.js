import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
   let url = "/api/pets"
   if(this.state.filters.type !== "all"){url += "?type=" + this.state.filters.type}
   fetch(url)
   .then(response => (response.json()))
   .then(pets => this.setState({pets}))
 }


  handleChangeFilterType = (type) => {
    this.setState({filters: Object.assign({},
    this.state.filters, {type: type})
  });
  }

  onFindPetsClick = () => {
    let url = "/api/pets"
    if(this.state.filters.type !== "all"){url += "?type=" + this.state.filters.type}
    fetch(url)
  }

  onAdoptPet = (petId) => {
  this.setState(prevState => ({
    adoptedPets: [...prevState.adoptedPets, petId]
  }))
}


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
