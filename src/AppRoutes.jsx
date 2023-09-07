import { Routes, Route } from 'react-router-dom';
import App from './App';
import Users from './Users';
import UsersDetails from './UsersDetails';
import Layout from './Layout';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout/>}>                    
                    <Route index element={<App />} />
                    <Route path='home' element={<App />} />
                    <Route path='users' element={<Users />} />
                    <Route path='user/:id/:nombre' element={<UsersDetails />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes

