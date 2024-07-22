import { Link, Outlet } from "react-router-dom";
import { NavBar } from './components/navBar'

export const App = () => {
    return (
        <main className="bg-slate-300/20">
            <NavBar />
            <Outlet />
        </main>
    )
};