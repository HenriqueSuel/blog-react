import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Repo } from '../pages/Repo';
import { NavBar } from '../components/Navbar';

const Routers = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/repo/:username' element={<Repo />} />
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