import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth()

    if (!isLoggedIn) {
        return <Navigate to='/login' />
    }

    return children
}