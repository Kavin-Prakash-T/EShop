import { Navigate } from "react-router"

const PrivateRoute = ({ children }) => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === 'true'
    const token=sessionStorage.getItem("token")
    const role=sessionStorage.getItem("role")
    return (
        isLoggedIn && token ? role === "admin" ? children : <Navigate to="/products" /> : <Navigate to="/login" />
    )
}

export default PrivateRoute;