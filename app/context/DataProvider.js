import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState, createContext } from 'react';
import { View, Text } from 'react-native';

const DataContext = createContext()

export default function DataProvider({children}) {
    const [data, setData] = useState([]);


  const findData = async () => {
    const res = await AsyncStorage.getItem("data");
    if (res !== null) setData(JSON.parse(res));
  };

  useEffect(() => {
    findData();
  }, []);

  return (
    <DataContext.Provider value={{data,setData,findData}} >
        {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext)