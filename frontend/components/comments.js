import React from "react"
import Comment from "./comment"

const Comments = ({ comments }) => {
    return (
        <div>
            <ul className="uk-comment-list">
                {comments.map((comment, i) => {
                    return (
                        <Comment comment={comment}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default Comments