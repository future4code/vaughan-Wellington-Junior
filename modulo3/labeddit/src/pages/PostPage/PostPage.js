import React from "react"
import useProtectedPage from "../../Hooks/useProtectedPage"

const PostPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>Post Page</h1>
        </div>
    )
}

export default PostPage