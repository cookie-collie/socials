import {
    AspectRatio,
    Card,
    CardBody,
    CardHeader,
    CardProps,
    Heading,
    Image,
    LinkBox,
    LinkOverlay,
    Stack,
    Stat,
    StatHelpText,
    StatNumber,
} from "@chakra-ui/react"

export interface CardListProps {
    heading?: React.ReactNode
    body?: React.ReactNode
    coverImgUrl?: string
    linkTo?: string
    price?: string
    additionalInfo?: React.ReactNode
}

export const CardList = (props: {
    cardContent: CardListProps[]
    variant: CardProps["variant"]
}) => {
    const { cardContent, variant } = props
    return (
        <>
            {cardContent.map((card, i) => (
                <LinkBox
                    key={"card-" + i}
                    as={Card}
                    variant={variant}
                    overflow={"hidden"}
                >
                    <AspectRatio maxH={"200px"}>
                        <Image src={card.coverImgUrl} />
                    </AspectRatio>
                    <LinkOverlay href={card.linkTo}>
                        <CardHeader>
                            <Stack gap={3}>
                                {typeof card.heading === typeof "" ? (
                                    <Heading
                                        fontFamily={"Fredoka, Comfortaa, Arial"}
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
            ))}
        </>
    )
}
