import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ComponentListItem from '../../Components/ComponentsOverview/ComponentListItem';
import PageHeader from '../../Components/PageHeader';

const ComponentsOverview = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: ASC, fields: frontmatter___slug }) {
        edges {
          node {
            frontmatter {
              slug
              title
              thumbnail
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <PageHeader
        title="Comonents"
        lead="Our basic building blocks for designing user interfaces. We provide usage guidelines and code snippets for each component."
      />

      {data.allMdx.edges.map(edge => (
        <ComponentListItem
          key={edge.node.frontmatter.slug}
          data={edge.node.frontmatter}
        />
      ))}
    </>
  );
};

export default ComponentsOverview;
