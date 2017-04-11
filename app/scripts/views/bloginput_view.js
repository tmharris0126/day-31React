import React from 'react'
import BlogcontentView from './blogcontent_view.js'
import Post from './post.js'
export default React.createClass({

  render: function(){
    return(
      <div>
        // <input type="text" ref={(input) => {this.props.title = input;}} />
        <input type="text" placeholder="Title" />
        // <textarea rows="20" cols="20" ref={(input) => {this.props.body = input;}} />
        <textarea rows="20" cols="20" placeholder="What's on your mind?" />
        // <button onClick={this.post}>POST</button>
        <button type="button">POST</button>
      </div>
    )
  }
})
