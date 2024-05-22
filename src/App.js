import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Products from './Products';
import Header from './header';
import { Link, Outlet } from 'react-router-dom';

function App(props) {
  return (
    <div className="border border-2 border-info m-2 p-2">
      <h1>APP</h1>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default (App);
