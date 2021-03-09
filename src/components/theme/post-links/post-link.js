import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

function checkCategory(category) {
  switch(category) {
    case "ux design":
      return "category is-green";
    case "ux thoughts":
      return "category is-red";
    case "ux research":
      return "category is-yellow";
    case "case study":
      return "category is-blue";
    default:
      return "hello world";
  }
}

const PostLink = ({ post }) => (
  <div className="post">
    <p className={checkCategory(post.frontmatter.category)}> {post.frontmatter.category} </p>
    <h1>
      <Link to={`posts/` + post.frontmatter.slug}>
        {post.frontmatter.title}
      </Link>
    </h1>
    <p>
    {post.excerpt}
    </p>
    <h2 className="date">{post.frontmatter.date}</h2>
  </div>
)

export default PostLink