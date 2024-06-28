import { FunctionComponent } from "react";
import { RouterProvider } from "react-router-dom";
import { hashRouter } from "./routing/routes";

export const App: FunctionComponent = (): JSX.Element => {
  return (
    <RouterProvider router={hashRouter} />
  )
}