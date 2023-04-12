import React from "react";

const Blog = () => {
  return (
    <div>
      <h1
        style={{ backgroundColor: "#F9F9FF" }}
        className="bg-purple-500 text-center py-24 text-3xl font-bold"
      >
        Blog
      </h1>
      <div className="container mx-auto my-20">
        <div className="border border-gray-200 rounded-xl p-10 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            Q1. When should you use context API?
          </h2>
          <p>
            The Context API is a tool in React that helps to pass data through a
            component tree without having to pass it manually at every
            level(prop drilling). It's a way to avoid having to pass data down
            through multiple levels of components, which can make code messy and
            difficult to understand. complex.
          </p>
        </div>
        <div className="border border-gray-200 rounded-xl p-10 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            Q2. What is a custom hook?
          </h2>
          <p>
            A custom hook in React is a function that starts with "use". Custom
            hooks help to make code more organized, reusable, and easier to
            maintain. It's important to follow the rules of hooks and only call
            hooks at the top level of your custom hook function.
          </p>
        </div>
        <div className="border border-gray-200 rounded-xl p-10 mb-8">
          <h2 className="text-2xl font-bold mb-6">Q3. What is useRef?</h2>
          <p>
            In React, useRef is a hook that create a reference to a DOM node or
            a value that persists across component renders. This means that the
            value of a ref can be updated without causing the component to
            re-render. useRef to access the value of a text input, to store a
            value that want to use in a callback function, or to access a value
            in a useEffect hook. The useRef hook is a powerful tool that can
            help optimize the performance of app, as it allows to update values
            without causing unnecessary re-renders.
          </p>
        </div>
        <div className="border border-gray-200 rounded-xl p-10 ">
          <h2 className="text-2xl font-bold mb-6">Q4. What is useMemo?</h2>
          <p>
            useMemo is a tool in React that can helps to wark faster .It works
            by caching the result of a function so that it doesn't have to be
            recalculated every time the component re-renders. By using useMemo,
            can be avoid unnecessary re-renders and improve the performance of
            the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
