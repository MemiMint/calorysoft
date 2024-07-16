import { FunctionComponent } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routing/routes";
import { DashboardLayout } from "./components/dashboard-layout";

export const App: FunctionComponent = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        {
          routes.map((route, index) => {
            return (
              <Route 
                key={index}
                index={route.index}
                path={route.path}
                element={
                  route.renderWithLayout ? (
                    <DashboardLayout>
                      { route.element }
                    </DashboardLayout>
                  ) : route.element
                }
              />
            )
          })
        }
      </Routes>
    </HashRouter>
  )
}