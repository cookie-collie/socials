import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react"
import { MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"
import { NavbarItem } from "./NavbarItem"

interface NavbarProps {
    onSelectItem?: (e: any) => void
    currentItem: string
    items: NavbarItem[]
}

export const Navbar = (props: NavbarProps) => {
    const { currentItem, onSelectItem, items } = props

    return (
        <Flex
            minWidth={"max-content"}
            alignItems={"center"}
            minHeight={"100%"}
            justifyContent={"center"}
            shadow={"md"}
        >
            <Box px={"2"}>
                <ButtonGroup variant={"ghost"} gap={4} colorScheme="pink">
                    <>
                        {items.map((item) => (
                            <Button
                                as={Link}
                                to={"/" + item.key}
                                key={item.key}
                                onClick={onSelectItem}
                                name={item.key}
                                variant={
                                    currentItem === item.key ? "solid" : "ghost"
                                }
                                display={{ base: "none", sm: "-webkit-box" }}
                            >
                                {item.label}
                            </Button>
                        ))}

                        <Box display={{ base: "-webkit-box", sm: "none" }}>
                            <Menu>
                                <MenuButton as={Button} variant={"ghost"}>
                                    <MdMenu />
                                </MenuButton>
                                <MenuList justifySelf={"center"}>
                                    {items.map((item) => (
                                        <MenuItem
                                            key={item.key}
                                            as={Link}
                                            to={"/" + item.key}
                                        >
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        </Box>
                    </>
                </ButtonGroup>
            </Box>
        </Flex>
    )
}
