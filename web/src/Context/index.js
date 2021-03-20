import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const Provider = ({ children }) => {
  const [validate, setValidate] = useState(false);
  const context = {
    validate,
    setValidate,
  };

  return (
    <BlogContext.Provider value={context} >
      { children }
    </BlogContext.Provider>
  );
};

export { BlogContext, Provider };