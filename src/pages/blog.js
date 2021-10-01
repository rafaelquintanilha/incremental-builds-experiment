import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import { content } from "./blog.module.css";

const Blog = () => {
  const {
    allButterPost: { nodes: posts },
  } = useStaticQuery(graphql`
    query MyQuery {
      allButterPost {
        nodes {
          title
          slug
        }
      }
    }
  `);

  return (
    <Layout>
      <div>
        <h1>My Blog</h1>
        <ul className={content}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Blog;
