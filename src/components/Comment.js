import React from 'react'
import CommentList from './CommentList'
import Remarkable from 'remarkable'

export default class CommentForm extends React.Component {
  rawMarkup() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.children.toString(), {sanitize: true});
    return {__html: rawMarkup};
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
    </div>
    );
  }
}
