import { BrowserRouter, Route, Routes, Suspense } from 'react-router-dom';
import BrowsePage from '../pages/BrowsePage';
import Home from '../pages/Home';

const RoutePaths = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />}></Route>
                <Route path="/browse-page" element={<BrowsePage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePaths;