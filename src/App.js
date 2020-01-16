import React from 'react';
import {Provider} from 'react-redux'
import store from './store';
import TodoList from './components/todos';
import './config/ReactotronConfig'

console.tron.log("testando");

function App() {
  return (
    <Provider store={store}>
      <TodoList>

      </TodoList>
      </Provider>
  );
}

export default App;
