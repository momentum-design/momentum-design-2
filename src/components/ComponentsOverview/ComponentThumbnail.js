import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const ComponentThumbnail = ({path}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { sourceInstanceName: { eq: "images" } }) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)
        const image = data.allFile.edges.find(
          edge => edge.node.relativePath === path
        );
        if (!image) {
          return null;
        }
        return <Img fluid={image.node.childImageSharp.fluid} />;
      }}
    />
  );
};

export default ComponentThumbnail;
