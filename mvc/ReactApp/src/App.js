import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <p>Blåatoppens dagblad - Admin</p>
                <nav>
                    <Link to="/Articles">Artiklar</Link> |{" "}
                    <Link to="/Authors">Journaliser</Link> |{" "}
                    <Link to="/Images">Bilder</Link>
                </nav>
                <Outlet />
            </div>

        );
    }
}
