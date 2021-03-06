import React, { Component } from 'react';
import TechItem from './TechItem';
class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };
  // executado assim que o componente aparece em tela
  componentDidMount() {
    const tech = localStorage.getItem('techs');
    if (tech) {
      this.setState({ techs: JSON.parse(tech) });
    }
  }
  // executado sempre que houver alterações nas props ou estado
  componentDidUpdate(prevProps /*ou _ se nao estiver utilizando*/, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }
  // executado quando o componente deixa de existir
  componentWillUnmount() {}

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(te => te !== tech) });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
