import { useNavigate } from "react-router-dom";
import { getItem, removeItem } from "../../../utils/storage";

export default async function Logoff() {

    const { token, usuario } = getItem('usuario')

    const navigate = useNavigate();

    removeItem('usuario');
    removeItem('token');

    navigate('/');
}