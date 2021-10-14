import React from "react"
import {fetchAPI} from "../lib/api";

const Comment = ({ comment }) => {

    return (
            <li className="uk-comment">
                <div className="uk-comment-header uk-position-relative">
                    <h4 className="uk-comment-title">
                        {comment.title}
                    </h4>
                    <p>
                    </p>
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