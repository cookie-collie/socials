import { Route, Routes } from "react-router-dom"
import {
    AboutMe,
    Commission,
    CommissionForm,
    Gallery,
    MySocials,
} from "../pages"
import { FetchObject } from "../utils"

interface CustomRouteProps {
    fetchedData: FetchObject
}

interface SingleRouteProps {
    path: string
    element: JSX.Element
}

export const CustomRoutes = ({ fetchedData }: CustomRouteProps) => {
    const routeList: SingleRouteProps[] = [
        {
            path: "",
            element: <AboutMe fetchedData={fetchedData} />,
        },

        {
            path: "socials",
            element: <MySocials />,
        },

        {
            path: "commissions",
            element: <Commission fetchedData={fetchedData} />,
        },

        {
            path: "comm-form",
            element: <CommissionForm fetchedData={fetchedData} />,
        },

        {
            path: "gallery",
            element: <Gallery fetchedData={fetchedData} />,
        },
    ]
    return (
        <Routes>
            {routeList.map((route) => (
                <Route
                    path={"/" + route.path}
                    element={route.element}
                    key={route.path}
                />
            ))}
        </Routes>
    )
}
