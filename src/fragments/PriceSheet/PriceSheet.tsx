import { Box, List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { MdCookie } from "react-icons/md"
import { CardList } from "../../components"
import { CustomCardProps } from "../../components/PriceCard"

interface FetchObject {
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

export const PriceSheet = () => {
    const [_isFetched, _setIsFetched] = useState<boolean>(false)
    const [_fetchedData, _setFetchedData] = useState<FetchObject>({
        PriceSheet: {
            description: {
                allBody: [],
                emotes: [],
                plushPhoneBG: [],
                refSheet: [],
            },
        },
        ImgLinks: {
            emotes: [],
            fullBody: [],
            halfBody: [],
            plushPhoneBG: [],
            refSheet: [],
        },
    })

    useEffect(() => {
        fetch("resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setFetchedData(data)
                _setIsFetched(true)
            })
    }, [])

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
            body: _renderBodyList(_fetchedData.PriceSheet.description.emotes),
            coverImgUrl: _fetchedData.ImgLinks.emotes[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32923",
            price: "$10",
            id: "card-emotes",
        },

        {
            heading: "Half Body",
            body: _renderBodyList(_fetchedData.PriceSheet.description.allBody),
            coverImgUrl: _fetchedData.ImgLinks.halfBody[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32921",
            price: "$25+",
            additionalInfo: <>Detailed background: +$5</>,
            id: "card-half-body",
        },

        {
            heading: "Full Body",
            body: _renderBodyList(_fetchedData.PriceSheet.description.allBody),
            coverImgUrl: _fetchedData.ImgLinks.fullBody[0],
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
            body: _renderBodyList(_fetchedData.PriceSheet.description.refSheet),
            coverImgUrl: _fetchedData.ImgLinks.refSheet[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32925",
            price: "$50",
            id: "card-ref-sheet",
        },

        {
            heading: "Plush Phone Wallpaper",
            body: _renderBodyList(
                _fetchedData.PriceSheet.description.plushPhoneBG
            ),
            coverImgUrl: _fetchedData.ImgLinks.plushPhoneBG[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32924",
            price: "$25",
            id: "card-plush-bg",
        },
    ]

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            gap={8}
            color={"blackAlpha.700"}
            fontSize={"lg"}
        >
            {_isFetched ? (
                <CardList cardContent={_commCard} variant={"outline"} />
            ) : (
                <Box minH={60} />
            )}
        </SimpleGrid>
    )
}
