import React from "react"
import useProtectedPage from "../../Hooks/useProtectedPage"

const FeedPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>Feed Page</h1>
        </div>
    )
}

export default FeedPage