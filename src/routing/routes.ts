import { createHashRouter, RouteObject } from "react-router-dom";
import { Init, Registry, Login } from "../screens";
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
        Component: null
    }
]

export const hashRouter = createHashRouter(routes)
