

import { PopupModal } from "react-calendly"


export default function CalendlyModal({
    url,
    open,
    onClose,
}: {
    url: string
    open: boolean
    onClose: () => void
}) {
    return (
        <PopupModal
            rootElement={document.getElementById('root')!} // or document.body
            url={url}
            onModalClose={onClose}
            open={open}
            pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '17397e',
                textColor: '4d5055',
            }}
        />
    )
}
