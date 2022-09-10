import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import LoginUsuario from "./pages/login";
import { getItem } from "./utils/storage";

function ProtectedRoutes() {
    const isAuthenticated = getItem('token');

    return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LoginUsuario />} />
            <Route path='/cadastrar' element={<></>} />
            <Route element={<ProtectedRoutes />} >
                <Route path='/caminhoPrincipal-main' element={<></>} />
            </Route>
        </Routes>
    )
}