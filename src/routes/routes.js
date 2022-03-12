import { BrowserRouter, Route, Routes, Suspense } from 'react-router-dom';
import Home from '../pages/Home';

const RoutePaths = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePaths;