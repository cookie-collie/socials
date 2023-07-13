import { ChakraProvider } from "@chakra-ui/react"
import MainLayout from "./pages/MainLayout"

function App() {
    return (
        <ChakraProvider>
            <MainLayout />
        </ChakraProvider>
    )
}

export default App
