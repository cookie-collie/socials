import { Box, Center, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar, { NavbarItem } from "../../components/Navbar"
import AboutMe from "../AboutMe"
import MySocials from "../MySocials"
import PriceSheet from "../PriceSheet"
import TOS from "../TOS"

export const MainLayout = () => {
    const items: NavbarItem[] = [
        { label: "About Me", key: "about-me" },
        { label: "My socials", key: "socials" },
        { label: "Price sheet", key: "price-sheet" },
        { label: "Terms of Service", key: "tos" },
    ]

    const [currentItem, setCurrentItem] = useState("about-me")
    const handleOnSelectItem = (e: any) => {
        setCurrentItem(e.target.name)
    }

    return (
        <Stack align={"stretch"} minHeight={"100%"}>
            <Box h={"20"}>
                <Navbar
                    items={items}
                    currentItem={currentItem}
                    onSelectItem={handleOnSelectItem}
                />
            </Box>

            <Box px={{ base: "8", md: "8", lg: "32" }} py={12}>
                <Routes>
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/socials" element={<MySocials />} />
                    <Route path="/price-sheet" element={<PriceSheet />} />
                    <Route path="/tos" element={<TOS />} />
                </Routes>
            </Box>

            <Center h={40} bgColor={"pink.300"}>
                <Text color={"whiteAlpha.900"}>
                    &copy; 2023 CookieCollie. All rights reserved
                </Text>
            </Center>
        </Stack>
    )
}
