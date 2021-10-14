import React from "react"

const Comment = ({ comment }) => {

    return (
            <li className="uk-comment">
                <div className="uk-comment-header uk-position-relative">
                    <h4 className="uk-comment-title">
                        {comment.title}
                    </h4>
                </div>
                <div className="uk-comment-body">
                    <p>
                        {comment.content}
                    </p>
                </div>
            </li>
    )
}

export default Comment