import React from 'react';
import CommentList from './CommentList';


export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const data = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ]

    return (
        <div>
        <CommentList data={data}/>
        </div>
        );
  }
}
