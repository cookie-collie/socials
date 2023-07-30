import { List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"
import { CardList } from "../../components"
import { CustomCardProps } from "../../components/PriceCard"
import { FetchObject } from "../../utils"

interface props {
    fetchedData: Pick<FetchObject, "ImgLinks" | "PriceSheet">
}

export const PriceSheet = ({ fetchedData }: props) => {
    const _renderBodyList = (list: string[]) => {
        return (
            <List spacing={4}>
                {list.map((content, i) => (
                    <ListItem key={"item-" + i}>
                        <ListIcon>
                            <MdCookie />
                        </ListIcon>
                        {content}
                    </ListItem>
                ))}
            </List>
        )
    }

    const _commCard: CustomCardProps[] = [
        {
            heading: "Emotes",
            body: _renderBodyList(fetchedData.PriceSheet.emotes.description),
            coverImgUrl: fetchedData.ImgLinks.emotes[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32923",
            price: fetchedData.PriceSheet.emotes.price,
            id: "card-emotes",
        },

        {
            heading: "Half Body",
            body: _renderBodyList(fetchedData.PriceSheet.halfBody.description),
            coverImgUrl: fetchedData.ImgLinks.halfBody[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32921",
            price: fetchedData.PriceSheet.halfBody.price,
            additionalInfo: <>Detailed background: +$5</>,
            id: "card-half-body",
        },

        {
            heading: "Full Body",
            body: _renderBodyList(fetchedData.PriceSheet.fullBody.description),
            coverImgUrl: fetchedData.ImgLinks.fullBody[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32922",
            price: fetchedData.PriceSheet.fullBody.price,
            additionalInfo: (
                <>
                    Additional character: +$25
                    <br />
                    Detailed background: +$5
                </>
            ),
            id: "card-full-body",
        },

        {
            heading: "Reference Sheet",
            body: _renderBodyList(fetchedData.PriceSheet.refSheet.description),
            coverImgUrl: fetchedData.ImgLinks.refSheet[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32925",
            price: fetchedData.PriceSheet.refSheet.price,
            id: "card-ref-sheet",
        },

        {
            heading: "Plush Phone Wallpaper",
            body: _renderBodyList(
                fetchedData.PriceSheet.plushPhoneBG.description
            ),
            coverImgUrl: fetchedData.ImgLinks.plushPhoneBG[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32924",
            price: fetchedData.PriceSheet.plushPhoneBG.price,
            id: "card-plush-bg",
        },
    ]

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            gap={8}
            color={"blackAlpha.700"}
            fontSize={"lg"}
        >
            <CardList cardContent={_commCard} variant={"outline"} />
        </SimpleGrid>
    )
}
