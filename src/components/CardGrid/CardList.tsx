import { CardProps } from "@chakra-ui/react"
import { CustomCard, CustomCardProps } from "../PriceCard"

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
    cardContent: CustomCardProps[]
    variant: CardProps["variant"]
}) => {
    const { cardContent, variant } = props
    return (
        <>
            {cardContent.map((item, i) => (
                <CustomCard key={"card-" + i} {...item} variant={variant} />
            ))}
        </>
    )
}
