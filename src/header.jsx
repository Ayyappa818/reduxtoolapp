import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Eudpoly</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/todolist">Todolist</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/countries">Countries</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}
export default Header