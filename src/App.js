import logo from './logo.svg';
import './App.css';


import Counter from './counter';
import Todolist from './todolist';
import Products from './products';


function App(props) {
  return (
    <div className="border border-2 border-info m-2 p-2">
      <h1>APP</h1>
      <Counter></Counter>
      <Todolist></Todolist>
      <Products></Products>
    </div>
  );
}

export default (App);
