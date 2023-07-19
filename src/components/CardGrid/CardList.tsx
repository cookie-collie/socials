import {
    AspectRatio,
    Card,
    CardBody,
    CardHeader,
    CardProps,
    Heading,
    Image,
    Img,
    LinkBox,
    LinkOverlay,
    Modal,
    ModalContent,
    ModalOverlay,
    Stack,
    Stat,
    StatHelpText,
    StatNumber,
} from "@chakra-ui/react"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { useState } from "react"

export interface CardListProps {
    heading?: React.ReactNode
    body?: React.ReactNode
    coverImgUrl?: string
    linkTo?: string
    price?: string
    additionalInfo?: React.ReactNode
    id: string
}

export const CardList = (props: {
    cardContent: CardListProps[]
    variant: CardProps["variant"]
}) => {
    const { cardContent, variant } = props

    const [selectedCard, setSelectedCard] = useState("")

    const _controls = useAnimation()
    const _variants = {
        hover: { scale: 1.05 },
        initial: { scale: 1 },
    }
    return (
        <>
            {cardContent.map((card, i) => (
                <motion.div
                    key={"card-" + i}
                    variants={_variants}
                    onMouseEnter={() => _controls.start("hover")}
                    onMouseLeave={() => _controls.start("initial")}
                    layoutId={card.id}
                >
                    <LinkBox
                        as={Card}
                        variant={variant}
                        overflow={"hidden"}
                        minH={"100%"}
                    >
                        <motion.div variants={_variants} animate={_controls}>
                            <AspectRatio maxH={"200px"}>
                                <Image src={card.coverImgUrl} />
                            </AspectRatio>
                        </motion.div>

                        <LinkOverlay
                            // href={card.linkTo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CardHeader>
                                <Stack gap={3}>
                                    {typeof card.heading === typeof "" ? (
                                        <Heading
                                            fontFamily={
                                                "Fredoka, Comfortaa, Arial"
                                            }
                                            size={"lg"}
                                            color={"blackAlpha.800"}
                                            textAlign={"center"}
                                        >
                                            {card.heading}
                                        </Heading>
                                    ) : (
                                        <>{card.heading}</>
                                    )}

                                    <Stat textAlign={"center"}>
                                        <StatNumber>{card.price}</StatNumber>
                                        <StatHelpText>
                                            {card.additionalInfo}
                                        </StatHelpText>
                                    </Stat>
                                </Stack>
                            </CardHeader>
                        </LinkOverlay>
                        <CardBody>{card.body}</CardBody>
                    </LinkBox>
                </motion.div>
            ))}

            <AnimatePresence>
                <Modal
                    isOpen={selectedCard ? true : false}
                    onClose={() => setSelectedCard("")}
                    size={"4xl"}
                >
                    <ModalOverlay />
                    <ModalContent bg={"transparent"}>
                        {selectedCard && (
                            <motion.div layoutId={selectedCard}>
                                {cardContent.map(
                                    (item) =>
                                        item.id === selectedCard && (
                                            <Card key={item.id}>
                                                <Img
                                                    src={item.coverImgUrl}
                                                    maxH={"300px"}
                                                    objectFit={"contain"}
                                                    style={{}}
                                                />
                                                <CardHeader>
                                                    <Heading
                                                        fontFamily={
                                                            "Fredoka, Comfortaa, Arial"
                                                        }
                                                        size={"lg"}
                                                        color={"blackAlpha.800"}
                                                        textAlign={"center"}
                                                    >
                                                        {item.heading}
                                                    </Heading>
                                                </CardHeader>
                                                <CardBody>{item.body}</CardBody>
                                            </Card>
                                        )
                                )}
                            </motion.div>
                        )}
                    </ModalContent>
                </Modal>
            </AnimatePresence>
        </>
    )
}
