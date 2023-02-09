import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLiked} = props
  const {
    username,
    comment,
    date,
    initialClassName,
    id,
    isLiked,
  } = commentDetails
  const initial = username[0]
  const likeBtn = isLiked ? 'blue-btn' : 'like-btn'
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    toggleLiked(id)
  }
  const ago = formatDistanceToNow(date)
  return (
    <li>
      <div className="header">
        <div className={initialClassName}>{initial}</div>
        <p className="name">{username}</p>
        <p className="time">{ago}</p>
      </div>
      <p className="comment-text">{comment}</p>
      <div className="last">
        <div className="like">
          <img alt="like" src={likeImgUrl} />
          <button onClick={onClickLike} className={likeBtn} type="button">
            Like
          </button>
        </div>
        <button data-testid="delete" className="delete-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
