import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPath } from "../../store";
import './header.css';

const Menu = () => {
    const dispatch = useDispatch();

    const setPathComponent = (path) => {
        dispatch(setPath(path));
    };

    return (
        <header className="header">
            <Link to="/component1" onClick={() => setPathComponent("component1")}>
                Component 1
            </Link>
            <Link to="/component2" onClick={() => setPathComponent("component2")}>
                Component 2
            </Link>
            <Link to="/component3" onClick={() => setPathComponent("component3")}>
                Component 3
            </Link>
        </header>
    );
};

export default Menu;
