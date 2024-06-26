import { createHashRouter, RouteObject } from "react-router-dom";
import { Init, Registry, Login, Dashboard } from "../screens";
import { StartUp } from "../components/StartUp";


const routes: RouteObject[] = [
    {
        path: "/",
        Component: StartUp,
    },
    {
        path: "/init",
        Component: Init
    },
    {
        path: "/registry",
        Component: Registry
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/dashboard",
        Component: Dashboard
    }
]

export const hashRouter = createHashRouter(routes)
