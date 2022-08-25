import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function ProtectedRoute({ children }) {
    const [ cookies, ] = useCookies(['token']);
    if (!cookies.token) {
        return <Navigate to="/" />
    }

    return children;
}