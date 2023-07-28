import { List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"
import { CardList } from "../../components"
import { CustomCardProps } from "../../components/PriceCard"

interface FetchObject {
    fetchedData: {
        PriceSheet: {
            description: {
                emotes: string[]
                allBody: string[]
                refSheet: string[]
                plushPhoneBG: string[]
            }
        }

        ImgLinks: {
            halfBody: string[]
            fullBody: string[]
            emotes: string[]
            plushPhoneBG: string[]
            refSheet: string[]
        }
    }
}

export const PriceSheet = ({ fetchedData }: FetchObject) => {
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
            body: _renderBodyList(fetchedData.PriceSheet.description.emotes),
            coverImgUrl: fetchedData.ImgLinks.emotes[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32923",
            price: "$10",
            id: "card-emotes",
        },

        {
            heading: "Half Body",
            body: _renderBodyList(fetchedData.PriceSheet.description.allBody),
            coverImgUrl: fetchedData.ImgLinks.halfBody[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32921",
            price: "$25+",
            additionalInfo: <>Detailed background: +$5</>,
            id: "card-half-body",
        },

        {
            heading: "Full Body",
            body: _renderBodyList(fetchedData.PriceSheet.description.allBody),
            coverImgUrl: fetchedData.ImgLinks.fullBody[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32922",
            price: "$35+",
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
            body: _renderBodyList(fetchedData.PriceSheet.description.refSheet),
            coverImgUrl: fetchedData.ImgLinks.refSheet[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32925",
            price: "$50",
            id: "card-ref-sheet",
        },

        {
            heading: "Plush Phone Wallpaper",
            body: _renderBodyList(
                fetchedData.PriceSheet.description.plushPhoneBG
            ),
            coverImgUrl: fetchedData.ImgLinks.plushPhoneBG[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32924",
            price: "$25",
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
