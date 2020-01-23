
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as FavoriteActions from '../../store/actions/favorites'
// import { Container } from './styles';

class Main extends Component {
  state = {
    repositoryImput: ''
  }
  handleAddRepository = (event)=>{
    event.preventDefault()
    this.props.addFavoriteRequest(this.state.repositoryImput)
  }
  render() {
    return(
    <Fragment>
      <form onSubmit={this.handleAddRepository}>
        <input
        placeholder="usuário/repositorio"
        value={this.state.repositoryImput}
        onChange={e => this.setState({repositoryImput:e.target.value})}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>

        {this.props.favorites.map(favorite => (
          <li key={favorite.id}>
          <p>
          <strong>{favorite.name} : </strong>{favorite.description}
          </p>
          <a href={favorite.url}>Acessar</a>
        </li>
        ))}
        
      </ul>
    </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  favorites:state.favorites
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)

