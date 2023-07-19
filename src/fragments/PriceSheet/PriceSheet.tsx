import { List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"
import CardList, { CardListProps } from "../../components/CardGrid"

export const PriceSheet = () => {
    const _halfBodyImgLinks = [
        "https://itaku.ee/api/media/gallery_imgs/IMG_0195_JpHZt4X/xl_aIAnQxF.jpg",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0292_lkjLNY1/xl_hkwsko8.jpg",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0287_3YEZAkF/xl_HabgUpK.jpg",
    ]

    const _fullBodyImgLinks = [
        "https://itaku.ee/api/media/gallery_imgs/Photo_2023-07-17_06.51.09_PM_vU98tKM/xl_499XiDq.jpg",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0142_BzQ3cZL/xl_Eq7hMZN.jpg",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0173_MmvEkpB/xl_4bVoAm5.jpg",
    ]

    const _emotesImgLinks = [
        "https://itaku.ee/api/media/gallery_imgs/IMG_0310_pab9zYy/xl_0rG8nGx.png",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0304_gFKeap2/xl_iM8M7ZB.png",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0220_GmhsnCP/xl_23hAPVb.png",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0212_f3YuX8Q/xl_T7fYj0j.png",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0186_ap5wwvd/xl_ASrnJq2.png",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0180_gyoNQ0m/xl_Xa1B3ET.png",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0164_hFXXjtq/xl_KyyWuvX.png",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0138_COYv2uR/xl_R6oOM2w.png",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0117_xpwvodZ/xl_Y0lTPIg.png",
    ]

    const _plushPhoneBGImgLinks = [
        "https://itaku.ee/api/media/gallery_imgs/IMG_0277_RYFbZ25/xl_nXZCavs.jpg",
    ]

    const _refSheetImgLinks = [
        "https://itaku.ee/api/media/gallery_imgs/IMG_0311_Fflw9U8/xl_RAX5fwh.jpg",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0127_0rbgRo0/xl_6msebNa.jpg",
        "https://itaku.ee/api/media/gallery_imgs/IMG_0213_NNdonUB/xl_tFMptS5.jpg",
    ]

    const _emotesDes = [
        <>Simple shaded point emote</>,
        <>Finished emote will be 1024px x 1024px</>,
        <>Twitch resizable</>,
    ]

    const _allBodyDes = [
        <>Fully shaded drawing</>,
        <>High-res drawing (at least 2048px x 2048px)</>,
    ]

    const _refSheetDes = [
        <>Basic reference sheet with back and front designs</>,
        <>Color palette included</>,
        <>No shading because of the nature of reference sheet</>,
    ]

    const _plushPhoneBGDes = [
        <>Fully shaded drawing</>,
        <>High-res result, matches with the phone resolution</>,
    ]

    const _renderBodyList = (list: React.ReactNode[]) => {
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

    const _commCard: CardListProps[] = [
        {
            heading: "Emotes",
            body: _renderBodyList(_emotesDes),
            coverImgUrl: _emotesImgLinks[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32923",
            price: "$10",
            id: "card-emotes",
        },

        {
            heading: "Half Body",
            body: _renderBodyList(_allBodyDes),
            coverImgUrl: _halfBodyImgLinks[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32921",
            price: "$25+",
            additionalInfo: <>Detailed background: +$5</>,
            id: "card-half-body",
        },

        {
            heading: "Full Body",
            body: _renderBodyList(_allBodyDes),
            coverImgUrl: _fullBodyImgLinks[0],
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
            body: _renderBodyList(_refSheetDes),
            coverImgUrl: _refSheetImgLinks[0],
            linkTo: "https://itaku.ee/profile/cookiecollie/gallery/32925",
            price: "$50",
            id: "card-ref-sheet",
        },

        {
            heading: "Plush Phone Wallpaper",
            body: _renderBodyList(_plushPhoneBGDes),
            coverImgUrl: _plushPhoneBGImgLinks[0],
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
            <CardList cardContent={_commCard} variant={"outline"} />
        </SimpleGrid>
    )
}
