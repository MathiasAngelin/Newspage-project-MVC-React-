import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import './custom.css'


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <React.Fragment>
                <header>
                    <p> Blåatoppens dagblad - Admin</p>
                </header>

                <body>
                    <div className='mainbody'>
                        <div className='sidemenu'>
                            <nav>
                                <p id='firstLink'><Link to="/Articles">Artiklar</Link></p>
                                <p><Link to="/Authors">Journaliser</Link></p>
                                <p><Link to="/Images">Bilder</Link></p>
                            </nav>
                        </div>


                        <div className='outlet'>
                            <Outlet />
                        </div>
                    </div>
                </body>
                <footer>
                    <p>h</p>
                </footer>
            </React.Fragment>
        );
    }
}
