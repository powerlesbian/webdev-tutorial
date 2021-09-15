import {
  createContext,
  useContext,
  useState,
} from "react";

const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

export const BankProvider = ({ children }) => {
  const [bank, setBank] = useState({
    loggedInUser: null,
  });

  const setLoggedInUser = (username) => {
    setBank({
      ...bank,
      loggedInUser: username,
    });
  }

  return (
    <BankContext.Provider value={{
      bank,
      setLoggedInUser,
    }}>
      {children}
    </BankContext.Provider>
  );
}
