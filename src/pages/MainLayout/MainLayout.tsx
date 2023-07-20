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
    SlideFade,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiOutlineInfo } from "react-icons/ai"
import { Route, Routes, useLocation } from "react-router-dom"
import { FAB } from "../../components/FAB"
import { Navbar, NavbarItem } from "../../components/Navbar"
import AboutWebsite from "../../fragments/AboutWebsite"
import PriceSheet from "../../fragments/PriceSheet"
import TOS from "../../fragments/TOS"
import AboutMe from "../AboutMe"
import { Commission } from "../Commission"
import { CommissionForm } from "../CommissionForm"
import MySocials from "../MySocials"

export const MainLayout = () => {
    const items: NavbarItem[] = [
        { label: "About Me", key: "about-me" },
        { label: "My socials", key: "socials" },
        { label: "Commission", key: "commission" },
        { label: "Commission Form", key: "comm-form" },
    ]

    const _path = useLocation()
    const [currentItem, setCurrentItem] = useState(
        _path.pathname.replace("/", "")
    )

    useEffect(() => {
        setCurrentItem(_path.pathname.replace("/", ""))
    }, [_path])

    const _drawerDisclosure = useDisclosure()
    const _slideTransDisclosure = useDisclosure()

    useEffect(() => {
        _slideTransDisclosure.onToggle()
    }, [])

    return (
        <>
            <Drawer
                placement="right"
                onClose={_drawerDisclosure.onClose}
                isOpen={_drawerDisclosure.isOpen}
                size={"sm"}
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
                        <Button onClick={_drawerDisclosure.onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Stack align={"stretch"} minHeight={"100%"}>
                <SlideFade
                    in={_slideTransDisclosure.isOpen}
                    style={{ zIndex: "999" }}
                    offsetY={"-20px"}
                    delay={0.3}
                >
                    <Box
                        h={20}
                        backdropFilter={"blur(5px)"}
                        bg={"whiteAlpha.800"}
                    >
                        <Navbar items={items} currentItem={currentItem} />
                    </Box>
                </SlideFade>

                <Box px={{ base: "8", md: "8", lg: "32" }} py={12} flex={1}>
                    <Routes>
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/socials" element={<MySocials />} />
                        <Route path="/price-sheet" element={<PriceSheet />} />
                        <Route path="/tos" element={<TOS />} />
                        <Route path="/commission" element={<Commission />} />
                        <Route path="/comm-form" element={<CommissionForm />} />
                    </Routes>
                </Box>

                <Center h={40} bgColor={"pink.300"}>
                    <Stack textAlign={"center"} color={"whiteAlpha.900"}>
                        <Text>
                            &copy; 2023 CookieCollie. All rights reserved
                        </Text>
                    </Stack>
                </Center>
            </Stack>

            <FAB onClick={_drawerDisclosure.onOpen}>
                <AiOutlineInfo />
            </FAB>
        </>
    )
}
