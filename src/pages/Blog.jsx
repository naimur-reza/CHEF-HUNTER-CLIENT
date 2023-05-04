import React from "react";
import Pdf from "react-to-pdf";
const Blog = () => {
  const ref = React.createRef();
  return (
    <div
      ref={ref}
      className="my-container py-10 bg-white text-gray-100 bg-opacity-20 backdrop-blur-sm p-5 py-5 "
    >
      <h1 className="text-3xl text-gray-200 font-semibold">Latest Blogs</h1>
      <div className="space-y-5">
        <div>
          <p className="text-xl py-2">
            1. Difference between control and Uncontrolled component in react
          </p>
          <p>
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally
          </p>
        </div>
        <div>
          <p className="text-xl py-2">
            2. How to validate React props using PropTypes?
          </p>
          <p>
            any : The prop can be of any data type. bool : The prop should be a
            Boolean. number : The prop should be a number. string : The prop
            should be a string. func : The prop should be a function. array :
            The prop should be an array. object : The prop should be an object.
          </p>
        </div>
        <div>
          <p className="text-xl py-2">
            3. Difference between nodejs and express js?
          </p>
          <p>
            Express is a minimal and flexible node. js web application
            framework, providing a robust set of features for building single
            and multi-page, and hybrid web applications. On the other hand,
            Node. js is detailed as "A platform built on Chrome's JavaScript
            runtime for easily building fast, scalable network applications".
          </p>
        </div>
        <div>
          <p className="text-xl py-2">
            4. What is a custom hook, and why will you create a custom hook?
          </p>
          <p>
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button
            className="btn rounded-none mt-6 bg-orange-400 text-white hover:bg-orange-500 border-0"
            onClick={toPdf}
          >
            Download This Blog
          </button>
        )}
      </Pdf>
    </div>
  );
};

export default Blog;
