import {
    Card,
    CardBody,
    Divider,
    Heading,
    ScaleFade,
    Stack,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { FetchObject } from "../../utils"
import { EmotesFragment } from "./EmotesFragment"
import { FullBodyFragment } from "./FullBodyFragment"
import { HalfBodyFragment } from "./HalfBodyFragement"
import { PlushPhoneBGFragment } from "./PlushPhoneBGFragment"
import { RefSheetFragment } from "./RefSheetFragment"

interface props {
    fetchedData: Pick<FetchObject, "ImgLinks">
}

export const Gallery = ({ fetchedData }: props) => {
    const _transition = useDisclosure()

    useEffect(() => {
        _transition.onToggle()
    }, [])

    return (
        <ScaleFade in={_transition.isOpen} delay={0.3}>
            <Card variant={"outline"} px={{ sm: 8, md: 16 }} py={10} minH={96}>
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
                            imgLinks={fetchedData.ImgLinks.fullBody}
                        />

                        <Divider />

                        <HalfBodyFragment
                            imgLinks={fetchedData.ImgLinks.halfBody}
                        />

                        <Divider />

                        <EmotesFragment
                            imgLinks={fetchedData.ImgLinks.emotes}
                        />

                        <Divider />

                        <RefSheetFragment
                            imgLinks={fetchedData.ImgLinks.refSheet}
                        />

                        <Divider />

                        <PlushPhoneBGFragment
                            imgLinks={fetchedData.ImgLinks.plushPhoneBG}
                        />
                    </Stack>
                </CardBody>
            </Card>
        </ScaleFade>
    )
}
