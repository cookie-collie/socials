import { AboutMe, Commission, CommissionForm, MySocials } from "../pages"

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
