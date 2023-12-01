import { createContext, useContext, useState } from "react";

const ResultDataContext = createContext();

const ResultDataContextProvider = ({ children }) => {
  const [jsonObjects, setJsonObjects] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  let values = {
    jsonObjects,
    setJsonObjects,
    showLoading,
    setShowLoading,
  };
  return (
    <ResultDataContext.Provider value={values}>
      {children}
    </ResultDataContext.Provider>
  );
};

const useResultDataContext = () => {
  return useContext(ResultDataContext);
};

export { ResultDataContextProvider, useResultDataContext };
