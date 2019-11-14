import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { graphql } from 'gatsby';

const ComponentsLayout = ({ data: { mdx } }) => {
  return (
    <div>
      <h1>This is the component layout</h1>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  );
};

export default ComponentsLayout;

const pageQuery = graphql`
  query ComponentsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
