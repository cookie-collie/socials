import {
    Box,
    ButtonGroup,
    Flex,
    IconButton,
    Stack,
    Text,
} from "@chakra-ui/react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export interface PaginationProps {
    maxPage?: number
    currentPage?: number
    onPrevious?: () => void
    onNext?: () => void
    onEnd?: () => void
    onStart?: () => void
    setPageCallback?: (page: number) => void
}

export const Pagination = (props: PaginationProps) => {
    const {
        currentPage = 1,
        maxPage,
        onPrevious,
        onNext,
        setPageCallback,
    } = props

    const _handleOnPrevious = () => {
        onPrevious?.()
        setPageCallback?.(currentPage - 1)
    }

    const _handleOnNext = () => {
        onNext?.()
        setPageCallback?.(currentPage + 1)
    }

    return (
        <Flex>
            <Stack
                direction={"row"}
                align={"center"}
                as={ButtonGroup}
                variant={"ghost"}
                size={"sm"}
            >
                <Box minW={"32px"}>
                    <IconButton
                        aria-label="previous"
                        icon={<FaArrowLeft />}
                        borderRadius={"full"}
                        display={currentPage! <= 1 ? "none" : "inline-flex"}
                        onClick={_handleOnPrevious}
                    />
                </Box>
                <Text>
                    Page: {currentPage}/{maxPage}
                </Text>
                <Box minW={"32px"}>
                    <IconButton
                        aria-label="next"
                        icon={<FaArrowRight />}
                        borderRadius={"full"}
                        display={
                            currentPage! >= maxPage! ? "none" : "inline-flex"
                        }
                        onClick={_handleOnNext}
                    />
                </Box>
            </Stack>
        </Flex>
    )
}
