"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  isPopupOpen: boolean;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  isPopupOpen: false,
  setIsPopupOpen: (): boolean => false,
});

export const GlobalContextProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ isPopupOpen, setIsPopupOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => GlobalContext;
