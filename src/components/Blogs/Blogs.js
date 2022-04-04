import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
      <div className="blog">
        <h1>What is context API?</h1>
        <p>
          Context API is a React structure. It provides us with the advantage to
          exchange unique details and assists in solving prop-drilling from all
          levels of our application. It requires a minimal setup and easy to
          use. It is a global variable. It is passed around the component tree.
          Context API is used when some data needs to be accessed by many
          components at different nesting levels
        </p>
      </div>
      <div className="blog">
        <h1>What are semantic tags?</h1>
        <p>
          Semantic tags of HTML5 defines the purpose of the element. Semantic
          tags help the the browser to understand the meaning of the content
          instead of just displaying it. It provides clarity of the HTML code.
          It also help search engines to read the page and find the required
          information faster.Using semantic tags gives us many more hooks for
          styling our content.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
