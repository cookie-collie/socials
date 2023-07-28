import {
    AspectRatio,
    Box,
    Card,
    CardBody,
    CardHeader,
    CardProps,
    Divider,
    Heading,
    Image,
    Img,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
    Stat,
    StatHelpText,
    StatNumber,
} from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export interface CustomCardProps {
    heading?: React.ReactNode
    body?: React.ReactNode
    coverImgUrl?: string
    linkTo?: string
    price?: string
    additionalInfo?: React.ReactNode
    id: string
    variant?: CardProps["variant"]
}

export const CustomCard = (props: CustomCardProps) => {
    const {
        id,
        additionalInfo,
        body,
        coverImgUrl,
        heading,
        linkTo,
        price,
        variant,
    } = props

    const [selectedCardContent, setSelectedCardContent] = useState("")

    return (
        <>
            <Card
                overflow={"hidden"}
                variant={variant}
                color={"blackAlpha.700"}
            >
                <AspectRatio maxH={"200px"}>
                    <motion.div
                        layoutId={id}
                        onClick={() => setSelectedCardContent(id)}
                    >
                        <Img src={coverImgUrl} cursor={"pointer"}/>
                    </motion.div>
                </AspectRatio>

                <Box px={5}>
                    <CardHeader px={0}>
                        <Stack gap={2}>
                            <Heading
                                fontFamily={"Fredoka, Comfortaa, Arial"}
                                size={"lg"}
                                color={"blackAlpha.800"}
                                textAlign={"center"}
                            >
                                {heading}
                            </Heading>

                            <Stat textAlign={"center"} color={"blackAlpha.800"}>
                                <StatNumber>{price}</StatNumber>
                                <StatHelpText>{additionalInfo}</StatHelpText>
                            </Stat>
                        </Stack>
                    </CardHeader>

                    <Divider />

                    <CardBody px={0}>{body}</CardBody>
                </Box>
            </Card>

            <AnimatePresence>
                <Modal
                    isOpen={selectedCardContent ? true : false}
                    onClose={() => setSelectedCardContent("")}
                    size={"3xl"}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <motion.div layoutId={id}>
                            <Image src={coverImgUrl} />
                        </motion.div>
                    </ModalContent>
                </Modal>
            </AnimatePresence>
        </>
    )
}
