import {
    AboutMe,
    Commission,
    CommissionForm,
    Gallery,
    MySocials,
} from "../pages"

export interface SingleRouteProps {
    path: string
    element: JSX.Element
}

export const routesList: SingleRouteProps[] = [
    {
        path: "",
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

    {
        path: "gallery",
        element: <Gallery />,
    },
]
