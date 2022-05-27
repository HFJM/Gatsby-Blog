import * as React from "react"
import "../styles/global.css"
import { Link } from 'gatsby'

const homePage = () => { 
  return (
    <div id="homeDiv">

      <img alt="" id="logo" src="https://i.imgur.com/IgYiwLA.png"></img>

      <h1>Welcome to my static Gatsby web page</h1>
      <p>Creating webpages with Gatsby is actually quite straightforward! 🥳</p>


      <h3 style={{paddingTop:'50px'}}>
        <Link to="/blog/post-1/">First blog post</Link>
      </h3>

      <h3>
        <Link to="/blog/post-2/">Another blog post</Link>
      </h3>

      <h3>
        <Link to="/blog/post-3/">Final blog post</Link>
      </h3>

    </div>
  )
}

export default homePage