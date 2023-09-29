import { Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Users from './pages/Users';
import UsersDetails from './pages/UsersDetails';
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

