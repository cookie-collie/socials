import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { HashRouter } from "react-router-dom"
import AboutMe from "./pages/AboutMe"
import MainLayout from "./pages/MainLayout"

function App() {
    const _theme = extendTheme({
        colors: {
            primary: {
                10: "#001944",
                40: "#355ca8",
                90: "#d9e2ff",
                100: "#ffffff",
            },

            secondary: {
                10: "#001e2d",
                40: "#00658d",
                90: "#c6e7ff",
                100: "#ffffff",
            },

            tertiary: {
                10: "#281800",
                40: "#805600",
                90: "#ffddb0",
                100: "#ffffff",
            },

            error: {
                10: "",
                40: "",
                90: "",
                100: "",
            },

            success: {
                10: "#410002",
                40: "#ba1a1a",
                90: "#ffdad6",
                100: "#ffffff",
            },

            warning: {
                // same as tertiary
                10: "#281800",
                40: "#805600",
                90: "#ffddb0",
                100: "#ffffff",
            },

            neutral: {
                10: "#001b3d",
                99: "#fdfbff",
                variant: {
                    30: "#44464f",
                    50: "#757780",
                    90: "#e1e2ec",
                },
            },
        },
    })

    return (
        <HashRouter basename="/">
            <ChakraProvider>
                <MainLayout>
                    <AboutMe />
                </MainLayout>
            </ChakraProvider>
        </HashRouter>
    )
}

export default App
