import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";

import moduleName from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={moduleName} alt="react-logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route path="users" element={<h1>User Page</h1>} />
                    <Route path="home" element={<h1>Home Page</h1>} />


                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
