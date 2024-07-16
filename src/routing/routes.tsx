import { RouteObject } from "react-router-dom";
import { Init, Registry, Login, Dashboard, CreatePatient, ViewPatients, ViewAsistants, CreateAsistant, CreateNutriotionalPlan, CreateReport, ViewNutritionalPlans, ViewReports } from "../screens";
import { StartUp } from "../components/StartUp";
import { ViewPatient } from "../screens/view-patient";

type LayoutRouter = {
    renderWithLayout?: boolean;
}

type IRoute = RouteObject & LayoutRouter;

export const routes: IRoute[] = [
    {
        path: "/",
        element: <StartUp />
    },
    {
        path: "/init",
        element: <Init />
    },
    {
        path: "/registry",
        element: <Registry />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        renderWithLayout: true
    },
    {
        path: "/view-patients",
        element: <ViewPatients />,
        renderWithLayout: true
    },
    {
        path: "/view-asistants",
        element: <ViewAsistants />,
        renderWithLayout: true
    },
    {
        path: "/create-patient",
        element: <CreatePatient />,
        renderWithLayout: true
    },
    {
        path: "/create-asistant",
        element: <CreateAsistant/ >,
        renderWithLayout: true
    },
    {
        path: "/view-nutritional-plans",
        element: <ViewNutritionalPlans />,
        renderWithLayout: true,
    },
    {
        path: "/create-nutritional-plan",
        element: <CreateNutriotionalPlan />,
        renderWithLayout: true,
    },
    {
        path: "/reports",
        element: <ViewReports />,
        renderWithLayout: true,
    },
    {
        path: "/create-report",
        element: <CreateReport />,
        renderWithLayout: true,
    },
    {
        path: "/patient/:id",
        element: <ViewPatient />,
        renderWithLayout: true
    }
];
