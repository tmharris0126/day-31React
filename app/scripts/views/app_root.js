import React from 'react'
import NavbarView from './navbar_view.js'
import BlogcontentView from './blogcontent_view.js'
import Link from './link.js'
import Post from './post.js'
import Bloginput from './bloginput_view.js'
export default React.createClass({
  render: function () {
    return (
      <div>
      <NavbarView />
      <BlogcontentView />
     </div>
   );
  }
});


//
//
// const Blog = React.createClass({
//   render: function (){
//     return(
//
//     )
//   }
// })
//
// });
