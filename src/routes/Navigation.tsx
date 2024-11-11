import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";

import moduleName from '../logo.svg'

import { routes } from "./routes";




export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={moduleName} alt="react-logo" />

                        {
                            routes.map(({ to, name }) => (
                                <ul key={to}>
                                    <li>
                                        <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                    </li>
                                </ul>
                            ))
                        }

                    </nav>


                    <Routes>

                        {
                            routes.map(({ path, Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))
                        }

                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
