import { useNavigate } from "react-router-dom";
import { getItem, removeItem } from "../../../utils/storage";

export default async function Logoff() {

    try {
        const { token, usuario } = getItem('usuario', 'token')

        const navigate = useNavigate();

        removeItem('usuario');
        removeItem('token');

        navigate('/');
    } catch (error) {
        console.log(error)
    }


}