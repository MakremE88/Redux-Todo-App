import Form from './Todo/Form';
import Header from './Todo/Header';
import TodoList from './Todo/TodoList';
import './App.css';

function App() {
  return (
    <div className="todo-app">
        <Header />
        <Form />
        <TodoList />
    </div>
  ) 
}
export default App;
