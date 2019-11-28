import React, { Component } from 'react'

class MovementForm extends Component {
  state = {
    type: '',
    description: '',
    amount: '',
    date: '',
    source: '',
    category: ''
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
          <h5 className="grey-text text-darken-3">Crear movimiento</h5>
          <div className="input-field">
            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="amount">Total</label>
            <input type="number" id="amount" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="date">Fecha</label>
            <input type="text" id="date" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="source">Recurso</label>
            <input type="text" id="source" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="category">Categoría</label>
            <input type="text" id="category" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Crear</button>
          </div>
        </form>
      </div>
    )
  }
}

export default MovementForm
