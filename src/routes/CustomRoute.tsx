import { Route, Routes } from "react-router-dom"
import { SingleRouteProps, routesList } from "./routesList"

interface CustomRouteProps {
    routes?: SingleRouteProps[]
}

export const CustomRoutes = ({ routes = routesList }: CustomRouteProps) => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    path={"/" + route.path}
                    element={route.element}
                    key={route.path}
                />
            ))}
        </Routes>
    )
}
