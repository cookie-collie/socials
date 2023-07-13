import { Box, Stack } from "@chakra-ui/react"
import { useState } from "react"
import Navbar, { NavbarItem } from "../../components/Navbar"

interface MainLayoutProps {
    children?: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
    const { children } = props

    const items: NavbarItem[] = [
        { label: "About Me", key: "about-me" },
        { label: "My socials", key: "socials" },
        { label: "Price sheet", key: "price-sheet" },
        { label: "Terms of Service", key: "tos" },
    ]

    const [currentItem, setCurrentItem] = useState("about-me")
    const handleOnSelectItem = (e:any) => {
        setCurrentItem(e.target.name)
    }

    return (
        <Stack align={"stretch"} minHeight={"100%"}>
            <Box h={"16"}>
                <Navbar
                    items={items}
                    currentItem={currentItem}
                    onSelectItem={handleOnSelectItem}
                />
            </Box>

            <Box>{children}</Box>
        </Stack>
    )
}
