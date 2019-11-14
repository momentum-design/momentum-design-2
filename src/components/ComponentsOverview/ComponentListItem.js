import React from 'react';
import { Link } from 'gatsby';
import ComponentThumbnail from './ComponentThumbnail';

const ComponentListItem = props => {
  const { slug, title, thumbnail } = props.data;
  return (
    <Link
      to={`components/${slug}`}
      className="docs-component-item--link md-link"
    >
      <div className="docs-component-item">
        <ComponentThumbnail
          className="docs-component-item--thumbnail"
          path={thumbnail}
        />
        <div className="docs-component-item--info">
          {title && (
            <h5 className="docs-component-item--info__title">{title}</h5>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ComponentListItem;
