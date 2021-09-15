import { useState, useEffect } from "react";
import axios from 'axios';

import { useBankContext } from "../utils/BankContext";

const Data = () => {
  const [users, setUsers] = useState([]);

  const { bank } = useBankContext();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/users');
      setUsers(res.data);
    }
    getData();
  }, []);

  return (
    <>
      <p>Global state</p>
      <div>
        {JSON.stringify(bank, null, 2)}
      </div>
      <p>Users</p>
      <div>
        {JSON.stringify(users, null, 2)}
      </div>
    </>
  )
};

export default Data;
