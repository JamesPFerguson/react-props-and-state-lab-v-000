import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.state = {type: ""}
  }

  handleChange = (event) => {
    this.props.onChangeType(event.target.value)
  }

  handleFindPets = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">

          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindPets}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
