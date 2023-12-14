import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Repo } from '../pages/Repo';
import { NavBar } from '../components/Navbar';
import { Teste } from '../pages/Teste';

const Routers = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/repo/:username' element={<Repo />} />
                <Route path='/teste' element={<Teste />} />
            </Routes>
        </BrowserRouter>
    )
}


/* 
const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Repo/:username",
        element: <Repo />
    },
]);
 */

export { Routers }