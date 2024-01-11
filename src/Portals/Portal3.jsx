import { createPortal } from "react-dom"

export default function Portal3({children}) {
    return createPortal(children,
        document.getElementById('openChaine')
    )
}