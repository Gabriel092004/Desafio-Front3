import { getItem, removeItem } from "../../../utils/storage";

export default async function Logoff() {

    const { token, usuario } = getItem('usuario')

    removeItem('usuario');
    removeItem('token');
}