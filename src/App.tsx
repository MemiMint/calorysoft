import React, { FunctionComponent, useEffect, useState } from "react";
import { StartUp } from "./components/StartUp";
import { Init } from "./pages/Init";

export const App: FunctionComponent = (): JSX.Element => {
  const [test, setTest] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTest(true);
    }, 5000)
  }, []);

  return (
    <Init />
  )
}