import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from './pages/Login';

function ProtectedRoutes({ redirectTo }) {
    const isAuThenticated = true;
    return isAuThenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
        </Routes>
    )
}