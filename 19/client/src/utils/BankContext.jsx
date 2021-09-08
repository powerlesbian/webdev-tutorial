import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import axios from 'axios';

const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

export const BankProvider = ({ children }) => {
  const [bank, setBank] = useState({
    loggedInUser: null,
    users: [],
  });

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/users');
      setBank({
        ...bank,
        users: res.data,
      });
    }
    getData();
  }, []);

  const setLoggedInUser = (username) => {
    setBank({
      ...bank,
      loggedInUser: username,
    });
  }

  const addUser = (user) => {
    setBank({
      ...bank,
      users: [...bank.users, user]
    });
  }

  return (
    <BankContext.Provider value={{
      bank,
      addUser,
      setLoggedInUser,
    }}>
      {children}
    </BankContext.Provider>
  );
}
