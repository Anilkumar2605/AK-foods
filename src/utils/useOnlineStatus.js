import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [OnlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        document.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
        document.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    })
    return OnlineStatus
}
export default useOnlineStatus;