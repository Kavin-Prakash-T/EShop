import { Navigate } from "react-router"

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === 'true'
    const token =sessionStorage.getItem("token")
    return (
        isLoggedIn && token ? children : <Navigate to="/login" />
    )
}

export default ProtectedRoute