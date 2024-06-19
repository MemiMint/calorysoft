import React, { FunctionComponent, useState } from "react";
import { Box, Button } from "@mui/joy";

export const App: FunctionComponent = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <Box width="100vw" height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Button onClick={() => setCount((prevState) => prevState + 1)} >Count is {count}</Button>
    </Box>
  )
}