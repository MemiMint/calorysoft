import { RouteObject } from "react-router-dom";
import { Init, Registry, Login, Dashboard, CreatePatient, ViewPatients, ViewAsistants, CreateAsistant, CreateNutritionalPlan, CreateReport, ViewNutritionalPlans, ViewReports } from "../screens";
import { StartUp } from "../components/StartUp";
import { ViewPatient } from "../screens/view-patient";
import { UpdatePatient } from "../screens/update-patient";
import { UpdateNutritionalPlan } from "../screens/update-nutritional-plan";
import { UpdateAssistant } from "../screens/update-assistant";
import { ViewReport } from "../screens/view-report";

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
        element: <CreateNutritionalPlan />,
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
        path: "/report/:id",
        element: <ViewReport />,
        renderWithLayout: true
    },
    {
        path: "/update-patient/:id",
        element: <UpdatePatient />,
        renderWithLayout: true,
    },
    {
        path: "/patient/:id",
        element: <ViewPatient />,
        renderWithLayout: true
    }, 
    {
        path: "/nutritional-plan/:id",
        element: <></>,
        renderWithLayout: true
    },
    {
        path: "/update-nutritional-plan/:id",
        element: <UpdateNutritionalPlan />,
        renderWithLayout: true
    },
    {
        path: "/update-assistant/:id",
        element: <UpdateAssistant />,
        renderWithLayout: true
    }
];
