import React, { Component } from 'react'

class CategoryForm extends Component {
  state = {
    name: '',
    color: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Crear categoría</h5>
          <div className="input-field">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="color">Color</label>
            <input type="text" id="color" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Crear</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CategoryForm
