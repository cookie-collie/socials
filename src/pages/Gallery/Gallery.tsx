import { Card, CardBody, Divider, Heading, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { EmotesFragment } from "./EmotesFragment"
import { FullBodyFragment } from "./FullBodyFragment"
import { HalfBodyFragment } from "./HalfBodyFragement"
import { PlushPhoneBGFragment } from "./PlushPhoneBGFragment"
import { RefSheetFragment } from "./RefSheetFragment"

interface FetchObject {
    ImgLinks: {
        halfBody: string[]
        fullBody: string[]
        emotes: string[]
        plushPhoneBG: string[]
        refSheet: string[]
    }
}

export const Gallery = () => {
    const [_isFetched, _setIsFetched] = useState<boolean>(false)
    const [_fetchedData, _setFetchedData] = useState<FetchObject>({
        ImgLinks: {
            emotes: [],
            fullBody: [],
            halfBody: [],
            plushPhoneBG: [],
            refSheet: [],
        },
    })

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setFetchedData(data)
                _setIsFetched(true)
            })
    }, [])

    return (
        <>
            {_isFetched && (
                <Card
                    variant={"outline"}
                    px={{ sm: 8, md: 16 }}
                    py={10}
                    minH={96}
                >
                    <CardBody>
                        <Stack gap={8}>
                            <Heading
                                fontFamily={"Fredoka, Comfortaa, Arial"}
                                size={"xl"}
                                color={"blackAlpha.800"}
                                textAlign={"center"}
                            >
                                Gallery
                            </Heading>

                            <Divider />

                            <FullBodyFragment
                                imgLinks={_fetchedData.ImgLinks.fullBody}
                            />

                            <Divider />

                            <HalfBodyFragment
                                imgLinks={_fetchedData.ImgLinks.halfBody}
                            />

                            <Divider />

                            <EmotesFragment
                                imgLinks={_fetchedData.ImgLinks.emotes}
                            />

                            <Divider />

                            <RefSheetFragment
                                imgLinks={_fetchedData.ImgLinks.refSheet}
                            />

                            <Divider />

                            <PlushPhoneBGFragment
                                imgLinks={_fetchedData.ImgLinks.plushPhoneBG}
                            />
                        </Stack>
                    </CardBody>
                </Card>
            )}
        </>
    )
}
