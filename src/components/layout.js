/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "../styles/index.scss";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <div className="background">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
        padding: "0 1rem 2rem",
      }}
    >
      <main>{children}</main>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
