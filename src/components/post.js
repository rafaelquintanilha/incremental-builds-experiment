import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "./layout";
import { container, back, body } from "./post.module.css";

const PostTemplate = ({ data }) => {
  return (
    <Layout>
      <div className={container}>
        <Link className={back} to="/blog">
          ⇦ Go back
        </Link>
        <h1>{data.butterPost.title}</h1>
        <div
          className={body}
          dangerouslySetInnerHTML={{ __html: data.butterPost.body }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    butterPost(slug: { eq: $slug }) {
      title
      body
    }
  }
`;

export default PostTemplate;
