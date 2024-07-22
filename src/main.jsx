import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/home';
import { About } from './pages/about';
import { Projects } from './pages/projects';
import { Contacts } from './pages/contacts';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "projects",
                    element: <Projects />,
                },
                {
                    path: "contacts",
                    element: <Contacts />,
                },
            ]
        }],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);