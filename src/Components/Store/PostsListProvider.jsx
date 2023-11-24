import { createContext } from "react";

const postList = createContext({});

const postListProvider = ({ children }) => {
  return <postList.Provider value={[]}>{children}</postList.Provider>;
};

export default postListProvider;
