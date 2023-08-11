import React, { useState, useContext } from "react";

const AppContext = React.createContext();

//Defining provider function to provide data to any components wrapped inside it
const AppProvider = ({ children }) => {
  const [search, setSearch] = useState(false);
  //Pass all states as props to all child components
  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//This fuction will be used by children to get current app context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
