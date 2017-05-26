import React from 'react';
import CommentList from './CommentList';

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <CommentList />
      </div>
    );
  }
}
