import { Box, Flex, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export interface NavItemProps {
    label: string
    id: string
    isActive?: boolean
}

export const NavItem = (props: NavItemProps) => {
    const { label, id, isActive = false } = props

    const _navItemVariants = {
        hover: {},
    }

    const _navItemContentVariants = {
        hover: {
            y: "-5px",
        },

        tap: {
            y: "5px",
        },
    }

    const _navItemIndicatorVariants = {
        hover: {
            backgroundColor: "var(--chakra-colors-pink-500)",
        },
    }

    return (
        <Box as={Link} to={"/" + id} whiteSpace={"nowrap"}>
            <motion.div
                variants={_navItemVariants}
                whileHover={"hover"}
                whileTap={"tap"}
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                }}
            >
                <Flex
                    h={"2px"}
                    w={"100%"}
                    position={"absolute"}
                    top={"100%"}
                    bg={isActive ? "pink.500" : "transparent"}
                >
                    <motion.div
                        variants={_navItemIndicatorVariants}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Flex>

                <Flex align={"center"} h={"100%"} px={4}>
                    <motion.div variants={_navItemContentVariants}>
                        {label}
                    </motion.div>
                </Flex>
            </motion.div>
        </Box>
    )
}

export const NavbarItemCompact = (props: NavItemProps) => {
    const { label, id, isActive } = props

    const _navItemLabelVariants = {
        hover: {
            y: "-5px",
            color: "var(--chakra-colors-pink-500)",
        },

        tap: {
            y: "5px",
        },
    }

    return (
        <Flex
            style={{
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
            }}
            align={"center"}
            justify={"center"}
            gap={4}
            position={"relative"}
        >
            <motion.div whileHover={"hover"} whileTap={"tap"}>
                <Flex gap={2} whiteSpace={"nowrap"}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        variants={_navItemLabelVariants}
                    >
                        <Text>{">"}</Text>
                    </motion.div>

                    <motion.div variants={_navItemLabelVariants}>
                        <Text as={Link} to={"/" + id}>
                            {label}
                        </Text>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        variants={_navItemLabelVariants}
                    >
                        <Text>{"<"}</Text>
                    </motion.div>
                </Flex>
            </motion.div>
        </Flex>
    )
}
