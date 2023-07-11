import { Layout, Menu, MenuProps, theme } from "antd"
import { ItemType } from "rc-menu/lib/interface"
import { ReactNode, useState } from "react"
import AboutMe from "../AboutMe"
import PriceSheet from "../PriceSheet"
import TOS from "../TOS"

interface MainLayoutProps {
    children?: ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
    const { children } = props

    const aboutItem: ItemType = {
        label: "About Me",
        key: "about-me",
    }

    const priceSheetItem = {
        label: "Price Sheet",
        key: "price-sheet",
    }

    const tos = {
        label: "Terms of Service",
        key: "tos",
    }

    const menuItems: MenuProps["items"] = [aboutItem, priceSheetItem, tos]
    const [currentItem, setCurrentItem] = useState("about-me")
    const handleMenuOnClick: MenuProps["onClick"] = (e) => {
        setCurrentItem(e.key)
    }

    const {
        token: { boxShadow },
    } = theme.useToken()

    return (
        <Layout // background
            style={{
                padding: "24px 56px",
                background: "#355ca8",
                minHeight: "100%",
            }}
        >
            <Layout // main content
                style={{
                    background: "#fdfbff",
                    padding: "16px",
                    // boxShadow: boxShadow,
                    borderRadius: "16px",
                }}
            >
                <Layout>
                    <Layout.Sider
                        style={{
                            background: "#fdfbff",
                            boxShadow: boxShadow,
                            borderRadius: "16px",
                        }}
                    >
                        <Menu
                            items={menuItems}
                            onClick={handleMenuOnClick}
                            selectedKeys={[currentItem]}
                            mode="inline"
                            style={{ borderRadius: "16px", padding: "8px" }}
                        />
                    </Layout.Sider>

                    <Layout.Content
                        style={{
                            padding: "0 0 0 24px",
                            background: "#fdfbff",
                        }}
                    >
                        <Layout.Content
                            style={{
                                boxShadow: boxShadow,
                                minHeight: "100%",
                                borderRadius: "16px",
                                padding: "0 24px",
                            }}
                        >
                            {currentItem === "about-me" && <AboutMe />}
                            {currentItem === "price-sheet" && <PriceSheet />}
                            {currentItem === "tos" && <TOS />}
                        </Layout.Content>
                    </Layout.Content>
                </Layout>

                {/* <Layout.Footer
                    style={{ background: "#fdfbff", textAlign: "center" }}
                >
                    <Layout.Content>
                        <Button icon={"d"} shape="circle" />
                        <Button icon={"d"} shape="circle" />
                        <Button icon={"d"} shape="circle" />
                    </Layout.Content>
                    <Layout.Content>asdasda</Layout.Content>
                </Layout.Footer> */}
            </Layout>
        </Layout>
    )
}
