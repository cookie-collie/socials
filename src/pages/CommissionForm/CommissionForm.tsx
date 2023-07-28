import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Heading,
    List,
    ListItem,
    ScaleFade,
    Stack,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CustomAlert, FormGuide, RequestForm } from "../../fragments"
import { FetchObject } from "../../utils"

interface props {
    fetchedData: Pick<FetchObject, "FormGuide">
}

export const CommissionForm = ({ fetchedData }: props) => {
    const _info = [
        "Ready to have a drawing made by me? Go ahead and fill out the form below!",

        "Be sure to read the TOS and my price sheet carefully before proceeding!",

        "Click the button below to visit the Commissions page to take a look at my TOS and everything else if you haven't.",
    ]

    const navigate = useNavigate()

    const _formGuideDisclosure = useDisclosure()
    const _alertDisclosure = useDisclosure()

    const [sendStatus, setSendStatus] = useState("")

    const _transition = useDisclosure()

    useEffect(() => {
        _transition.onToggle()
    }, [])

    const _handleCloseAlert = () => {
        _alertDisclosure.onClose()
        navigate(0)
    }

    return (
        <>
            <ScaleFade in={_transition.isOpen} delay={0.3}>
                <Card
                    variant={"outline"}
                    px={{ sm: 8, md: 16 }}
                    py={10}
                    color={"blackAlpha.700"}
                    fontSize={"xl"}
                >
                    <CardHeader>
                        <Heading
                            fontFamily={"Fredoka, Comfortaa, Arial"}
                            size={"xl"}
                            color={"blackAlpha.800"}
                            textAlign={"center"}
                        >
                            Commission Form
                        </Heading>
                    </CardHeader>

                    <Divider />

                    <CardBody>
                        <Stack gap={8}>
                            <List textAlign={"center"} spacing={4}>
                                {_info.map((item, i) => (
                                    <ListItem key={"item-" + i}>
                                        {item}
                                    </ListItem>
                                ))}
                            </List>

                            <ButtonGroup
                                justifyContent={"center"}
                                colorScheme="pink"
                            >
                                <Stack>
                                    <Button as={Link} to={"/commissions"}>
                                        Commissions Page
                                    </Button>

                                    <Button
                                        onClick={_formGuideDisclosure.onOpen}
                                    >
                                        Form Guide
                                    </Button>
                                </Stack>
                            </ButtonGroup>

                            <Box>
                                <RequestForm
                                    activateAlert={_alertDisclosure.onOpen}
                                    setSendStatus={setSendStatus}
                                />
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </ScaleFade>

            <FormGuide
                isOpen={_formGuideDisclosure.isOpen}
                onClose={_formGuideDisclosure.onClose}
                fetchedContent={fetchedData.FormGuide}
            />

            <CustomAlert
                isOpen={_alertDisclosure.isOpen}
                onClose={_handleCloseAlert}
                sendStatus={sendStatus}
            />
        </>
    )
}
