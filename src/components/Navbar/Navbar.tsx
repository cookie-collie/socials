import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react"
import { NavbarItem } from "./NavbarItem"
import { Link } from "react-router-dom"

interface NavbarProps {
    onSelectItem: (e: any) => void
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
                            >
                                {item.label}
                            </Button>
                        ))}
                    </>
                </ButtonGroup>
            </Box>
        </Flex>
    )
}
