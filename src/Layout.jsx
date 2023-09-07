import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate();
    // cuando yo quiera mandar a otra ruta
    // navigate('/user/${id}/${nombre}')
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