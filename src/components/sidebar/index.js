import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Sidebar from '@momentum-ui/react';

const AppSidebar = ({ siteTitle }) => (
  <aside>
    <ul>
      <li>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </li>
    </ul>
  </aside>
);

AppSidebar.propTypes = {
  siteTitle: PropTypes.string,
};

AppSidebar.defaultProps = {
  siteTitle: ``,
};

export default AppSidebar;
