import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import LoginUsuario from "./pages/Login";
import Signin from "./pages/Signin";
import Main from "./pages/Main";
import { getItem } from "./utils/storage";

function ProtectedRoutes() {
    const isAuthenticated = getItem('token');

    return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<LoginUsuario />} />
            <Route exact path='/usuario' element={<Signin />} />
            <Route exact path='/main' element={<Main />} />
            <Route element={<ProtectedRoutes />} >
                <Route exact path='/caminhoPrincipal-main' element={<></>} />
            </Route>
        </Routes>
    )
}