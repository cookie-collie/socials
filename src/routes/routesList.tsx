import { AboutMe } from "../pages/AboutMe"
import { Commission } from "../pages/Commission"
import { CommissionForm } from "../pages/CommissionForm"
import { MySocials } from "../pages/MySocials"

export interface SingleRouteProps {
    path: string
    element: JSX.Element
}

export const routesList: SingleRouteProps[] = [
    {
        path: "about-me",
        element: <AboutMe />,
    },

    {
        path: "socials",
        element: <MySocials />,
    },

    {
        path: "commissions",
        element: <Commission />,
    },

    {
        path: "comm-form",
        element: <CommissionForm />,
    },
]
