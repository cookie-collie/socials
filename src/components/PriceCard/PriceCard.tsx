import {
    AspectRatio,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardProps,
    Flex,
    Heading,
    Image,
    Img,
    Link,
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

    const _coverImgVariants = {
        hover: {
            // scale: 1.05,
        },
    }

    const _innerButtonsVariants = {
        hover: {
            opacity: 1,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
    }

    const [selectedCardContent, setSelectedCardContent] = useState("")

    return (
        <>
            <Card overflow={"hidden"} variant={variant}>
                <motion.div whileHover={"hover"} variants={_coverImgVariants}>
                    <AspectRatio maxH={"200px"}>
                        <>
                            <motion.div
                                variants={_innerButtonsVariants}
                                initial={{ opacity: 0 }}
                                style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Flex align={"center"} h={"100%"}>
                                    <Stack direction={"column"}>
                                        <Button
                                            variant={"solid"}
                                            colorScheme="pink"
                                            onClick={() =>
                                                setSelectedCardContent(id)
                                            }
                                        >
                                            Expand
                                        </Button>

                                        <Button
                                            variant={"solid"}
                                            colorScheme="pink"
                                            as={Link}
                                            href={linkTo}
                                            style={{ textDecoration: "none" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            More Examples
                                        </Button>
                                    </Stack>
                                </Flex>
                            </motion.div>

                            <motion.div layoutId={id}>
                                <Img src={coverImgUrl} />
                            </motion.div>
                        </>
                    </AspectRatio>
                </motion.div>

                <CardHeader>
                    <Stack gap={3}>
                        <Heading
                            fontFamily={"Fredoka, Comfortaa, Arial"}
                            size={"lg"}
                            color={"blackAlpha.800"}
                            textAlign={"center"}
                        >
                            {heading}
                        </Heading>

                        <Stat textAlign={"center"}>
                            <StatNumber>{price}</StatNumber>
                            <StatHelpText>{additionalInfo}</StatHelpText>
                        </Stat>
                    </Stack>
                </CardHeader>

                <CardBody>{body}</CardBody>
            </Card>

            <AnimatePresence>
                <Modal
                    isOpen={selectedCardContent ? true : false}
                    onClose={() => setSelectedCardContent("")}
                    size={"3xl"}
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
