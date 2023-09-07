import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Usuarios</Link>
                    </li>
                    <li>
                        <Link to="/user/1/Ana">Detalle del Usuario</Link>
                    </li>
                </ul>
            </nav>
            <div>Esta es la parte que voy a compartir con los otros componentes</div>
            <Outlet />
        </>
    )
}

export default Layout