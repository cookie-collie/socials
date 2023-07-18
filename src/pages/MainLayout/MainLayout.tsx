import {
    Box,
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Link,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Navbar, NavbarItem } from "../../components/Navbar"
import AboutMe from "../AboutMe"
import AboutWebsite from "../AboutWebsite"
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

    const _path = useLocation()
    const [currentItem, setCurrentItem] = useState(
        _path.pathname.replace("/", "")
    )

    useEffect(() => {
        setCurrentItem(_path.pathname.replace("/", ""))
    }, [_path])

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Drawer
                placement="right"
                onClose={onClose}
                isOpen={isOpen}
                size={"xs"}
            >
                <DrawerOverlay />
                <DrawerContent p={2} fontFamily={"Fredoka, Comfortaa, Arial"}>
                    <DrawerHeader fontSize={"2xl"}>
                        About this Website
                    </DrawerHeader>
                    <DrawerBody>
                        <AboutWebsite />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button onClick={onClose}>Close</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Stack align={"stretch"} minHeight={"100%"}>
                <Box h={"20"}>
                    <Navbar items={items} currentItem={currentItem} />
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
                    <Stack textAlign={"center"} color={"whiteAlpha.900"}>
                        <Text>
                            &copy; 2023 CookieCollie. All rights reserved
                        </Text>
                        <Link onClick={onOpen}>About this website</Link>
                    </Stack>
                </Center>
            </Stack>
        </>
    )
}
