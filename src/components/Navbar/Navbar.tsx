import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react"
import { NavbarItem } from "./NavbarItem"

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
                <ButtonGroup variant={"ghost"} gap={4} color={"teal"}>
                    <>
                        {items.map((item) => (
                            <Button
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
