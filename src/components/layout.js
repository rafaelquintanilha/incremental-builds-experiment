import React from "react";
import { container, content, footer, nav } from "./layout.module.css";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <nav className={nav}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <main className={content}>{children}</main>
      <footer className={footer}>
        Created by{" "}
        <a href="https://rafaelquintanilha.com">Rafael Quintanilha</a>
      </footer>
    </div>
  );
};

export default Layout;
