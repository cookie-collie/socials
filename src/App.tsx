import { ConfigProvider } from "antd"
import MainLayout from "./components/MainLayout"

function App() {
    const _theme = {
        token: {
            colorTextBase: "#44464f",
            fontSize: 16,
            borderRadius: 6,
            wireframe: false,
            // colorPrimary: "#6b8fdf",
        },
    }

    return (
        <ConfigProvider theme={_theme}>
            <MainLayout><p>Body</p></MainLayout>
        </ConfigProvider>
        // <MainLayout><p>Body</p></MainLayout>

    )
}

export default App
