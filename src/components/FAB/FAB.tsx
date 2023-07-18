import { Flex, IconButton } from "@chakra-ui/react"

interface FABProps {
    children?: React.ReactElement
    onClick?: () => void
}
export const FAB = (props: FABProps) => {
    const { children, onClick } = props
    return (
        <Flex
            style={{
                position: "fixed",
                zIndex: 999,
                insetBlock: "auto 5vmin",
                insetInline: "auto 5vmin",
            }}
        >
            <IconButton
                icon={children}
                aria-label="Website Info"
                borderRadius={"full"}
                colorScheme="blue"
                size={"lg"}
                onClick={onClick}
                shadow={"md"}
            />
        </Flex>
    )
}
