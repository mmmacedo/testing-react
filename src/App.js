import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      senha: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {    
    this.setState({login: event.target.value});
  }

  handleChangeSenha(event) {    
    this.setState({senha: event.target.value});
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.login} and a password is ${this.state.senha}!`);
    event.preventDefault();
  }

  render() {
    return (
      <form id='form' onSubmit={this.handleSubmit}>
        <label> Login:
          <input id='login' type="text" value={this.state.login} onChange={this.handleChangeName} />
        </label>
        <br/>
        <label> Senha:
          <input id='senha' type="text" value={this.state.senha} onChange={this.handleChangeSenha} />
        </label>      
        <br/>
        
        <input type="submit" value="Submit" className="btn"/>
      </form>
    );
  }

}

export default App;
