export interface FetchObject {
    AboutWebsite: {
        items: string[]
        references: {
            href: string
            title: string
            key: string
        }[]
    }
    CommissionDetails: {
        details: string[]
        paymentProcess: string[]
        willDraw: string[]
        willNotDraw: string[]
    }
    Extras: {
        background: string[]
        others: string[]
    }
    FormGuide: {
        guidelines: {
            field: string
            content: string
        }[]
    }
    PriceSheet: {
        emotes: {
            description: string[]
            price: string
        }

        halfBody: {
            description: string[]
            price: string
        }

        fullBody: {
            description: string[]
            price: string
        }

        refSheet: {
            description: string[]
            price: string
        }

        plushPhoneBG: {
            description: string[]
            price: string
        }
    }
    ImgLinks: {
        halfBody: string[]
        fullBody: string[]
        emotes: string[]
        plushPhoneBG: string[]
        refSheet: string[]
    }
    TOS: {
        tos: string[]
        importants: string[]
    }
    AboutMe: {
        content: string[]
    }
    Commission: {
        content: string[]
    }
    CommissionForm: {
        content: string[]
    }
}
