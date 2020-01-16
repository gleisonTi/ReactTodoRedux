import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as TodoActions from '../store/actions/todos'

const TodoList = ({addTodo, todos, removeTodo}) => {
  return(
    <Fragment>
  <ul>
    {
      todos.map(item => <li key={item.id}>{item.text} <button onClick={()=> removeTodo(item.id)}>remover</button></li>)
    }    
  </ul>
  <button onClick={()=>addTodo("novo Todo")}>Adicionar</button>
    </Fragment>

)
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)( TodoList)