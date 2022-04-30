import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import Spinner from './../Layout/Spinner'
const Home = lazy(() => import('../pages/Home'));
const BrowsePage = lazy(() => import('../pages/BrowsePage'));
const RoutePaths = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <Spinner/>
            }>
                <Routes>

                    <Route path="/FlyM/" element={<Home />}></Route>
                    <Route path="/FlyM/browse-page" element={<BrowsePage />}></Route>

                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default RoutePaths;