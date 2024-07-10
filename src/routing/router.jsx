import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsSearch';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: 'search', element: <SearchPage /> },
            { path: 'details', element: <DetailsPage /> },
        ],
    }
])