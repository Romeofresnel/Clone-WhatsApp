import { createPortal } from "react-dom"

export default function Portal4({children}) {
    return createPortal(children,
        document.getElementById('openCommunity')
    )
}