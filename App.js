import React from "react";
import {Center, NativeBaseProvider } from "native-base";
import Sign_in from "./components/Sign_in";
const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Sign_in />
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
