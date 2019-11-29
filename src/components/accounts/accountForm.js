import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../../store/actions/accountActions';

class AccountForm extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createAccount(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Crear cuenta</h5>
          <div className="input-field">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Crear</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (movement) => dispatch(createAccount(movement))
  }
}

export default connect(null, mapDispatchToProps)(AccountForm);

