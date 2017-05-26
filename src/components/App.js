import React from 'react';
import Comment from './Comment';

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Comment />
      </div>
    );
  }
}
