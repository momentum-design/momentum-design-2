import { Link } from 'gatsby';
import React from 'react';
import Layout from '../Components/Layout/Home';
import SEO from '../Components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
