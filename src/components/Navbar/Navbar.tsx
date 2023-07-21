import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Divider,
    Flex,
    Stack,
} from "@chakra-ui/react"
import { NavItem, NavbarItem, NavbarItemCompact } from "./NavItem"

interface NavbarProps {
    onSelectItem?: (e: any) => void
    currentItem?: string
    items?: NavbarItem[]
    homeSection?: React.ReactNode
    subSection?: React.ReactNode
}

export const Navbar = (props: NavbarProps) => {
    const { currentItem, onSelectItem, items, homeSection, subSection } = props

    return (
        <Stack
            direction={{ base: "column", sm: "row" }}
            minH={12}
            minW={"100vw"}
            gap={0}
            shadow={"md"}
        >
            <Flex
                justify={"center"}
                align={"center"}
                px={8}
                minH={{ base: 12 }}
                flex={{ base: 1, sm: 0 }}
            >
                {homeSection}
            </Flex>

            {homeSection && (
                <Divider
                    orientation="vertical"
                    h={12}
                    display={{ base: "none", sm: "block" }}
                    my={4}
                />
            )}

            <Flex
                align={"center"}
                px={8}
                flex={1}
                justify={"space-between"}
                display={{ base: "none", sm: "flex" }}
            >
                <Stack direction={"row"} gap={0} h={"100%"}>
                    {items?.map((item) => (
                        <NavItem
                            key={item.id}
                            label={item.label}
                            id={item.id}
                            isActive={currentItem === item.id ? true : false}
                        />
                    ))}
                </Stack>

                <Flex align={"center"} justify={"center"} h={"100%"}>
                    {subSection}
                </Flex>
            </Flex>

            <Accordion allowToggle display={{ base: "block", sm: "none" }}>
                <AccordionItem>
                    <AccordionButton justifyContent={"center"}>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <Stack>
                            {items?.map((item) => (
                                <NavbarItemCompact
                                    key={item.id}
                                    label={item.label}
                                    id={item.id}
                                    isActive={
                                        currentItem === item.id ? true : false
                                    }
                                />
                            ))}
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    )
}
