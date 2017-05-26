import React from 'react';
import CommentBox from './CommentBox';

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <CommentBox />
      </div>
    );
  }
}
