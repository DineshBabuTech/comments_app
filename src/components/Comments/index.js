import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {username: '', comment: '', commentsList: []}

  toggleLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  getNameInput = event => {
    this.setState({username: event.target.value})
  }

  getCommentInput = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const initialBgClassName = `initial-cont ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      username,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBgClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      username: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList, username, comment} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1>Comments</h1>
          <div className="img-cont">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <div>
              <p>Say something about 4.0 Technologies</p>
              <form className="box">
                <input
                  value={username}
                  onChange={this.getNameInput}
                  placeholder="Your Name"
                  className="input"
                />
                <textarea
                  value={comment}
                  onChange={this.getCommentInput}
                  placeholder="Your Comment"
                  rows="8"
                  className="textarea"
                />
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <hr className="separator" />
          <div className="comment-cont">
            <button type="button" className="comment-count">
              0
            </button>
            <p>Comments</p>
          </div>
          <ul className="comment-section">
            {commentsList.map(eachComment => (
              <CommentItem
                toggleLiked={this.toggleLiked}
                commentDetails={eachComment}
                key={eachComment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
