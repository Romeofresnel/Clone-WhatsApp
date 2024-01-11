import { createPortal } from "react-dom"

export default function Portal2({children}) {
    return createPortal(children,
        document.getElementById('settingStatut')
    )
}