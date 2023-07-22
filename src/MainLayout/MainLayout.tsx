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
    Icon,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiFillHome, AiOutlineInfo } from "react-icons/ai"
import { useLocation } from "react-router-dom"
import { FAB, Navbar } from "../components"
import { NavItemProps } from "../components/Navbar"
import { AboutWebsite } from "../fragments"
import { CustomRoutes } from "../routes"

export const MainLayout = () => {
    const items: NavItemProps[] = [
        { label: "About Me", id: "about-me" },
        { label: "My socials", id: "socials" },
        { label: "Commissions", id: "commissions" },
        { label: "Commission Form", id: "comm-form" },
    ]

    const _path = useLocation()
    const [currentItem, setCurrentItem] = useState(
        _path.pathname.replace("/", "")
    )

    useEffect(() => {
        setCurrentItem(_path.pathname.replace("/", ""))
    }, [_path])

    const _drawerDisclosure = useDisclosure()

    return (
        <>
            {/* About this website drawer */}
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

            {/* Main layout */}
            <Stack
                align={"stretch"}
                minHeight={"100%"}
                color={"blackAlpha.700"}
            >
                {/* Navbar area */}
                <Box fontWeight={"bold"} color={"pink.500"}>
                    <Navbar
                        items={items}
                        homeSection={<Icon as={AiFillHome} boxSize={6} />}
                        currentItem={currentItem}
                    />
                </Box>

                {/* Body area */}
                <Box px={{ base: "8", md: "8", lg: "32" }} py={12} flex={1}>
                    <CustomRoutes />
                </Box>

                {/* Footer area */}
                <Center h={40} bgColor={"pink.300"}>
                    <Stack textAlign={"center"} color={"whiteAlpha.900"}>
                        <Text>
                            &copy; 2023 CookieCollie. All rights reserved
                        </Text>
                    </Stack>
                </Center>
            </Stack>

            {/* FAB to open about this website drawer */}
            <FAB onClick={_drawerDisclosure.onOpen}>
                <AiOutlineInfo />
            </FAB>
        </>
    )
}
