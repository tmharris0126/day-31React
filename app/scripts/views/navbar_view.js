import React from 'react'
import Link from './link.js'

export default React.createClass({
  render: function (){
    return (
      <nav>

    The Loki Files
    <br/>
    <Link dest= "/blog" name='Blog' />
    <br/>
    <Link dest= "/about" name= 'About' />
    <br/>
    <Link dest= "/contact" name= 'Contact' />
    <br/>
    </nav>);
  }
});
