import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import wordMark from '@momentum-ui/core/images/momentum/momentum-horiz-color.svg';
import {
  ListItem,
  Topbar,
  TopbarMobile,
  TopbarNav,
  TopbarRight,
} from '@momentum-ui/react';

const wordMarkImage = <img src={wordMark} alt="Cisco Momentum Design" />;

const AppHeader = ({ siteTitle }) => (
  <header>
    <Topbar
      color="light"
      image={wordMarkImage}
      brandAnchorElement={<Link to="/" />}
    >
      <TopbarNav>
        <ListItem
          customRefProp="innerRef"
          customAnchorNode={
            <Link to="/components" activeClassName={'active'}>
              Components
            </Link>
          }
        />
      </TopbarNav>
    </Topbar>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

AppHeader.propTypes = {
  siteTitle: PropTypes.string,
};

AppHeader.defaultProps = {
  siteTitle: ``,
};

export default AppHeader;
