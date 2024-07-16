import React, { FunctionComponent } from "react";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import { Sidebar } from "../sidebar";

export const DashboardLayout: FunctionComponent<{ children?: React.ReactNode }> = ({ children }): JSX.Element => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box  flex={1} bgcolor="#FCFCFE" padding={4}>
                <Box position="sticky" top={0} display="flex" alignItems="center" justifyContent="flex-end" >
                    <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", ":hover": { backgroundColor: "red" } }} gap={1} display="flex" padding={1} borderRadius={4} bgcolor="white">
                        <Avatar size="lg" variant="solid" />
                        <Box >
                            <Typography level="title-sm" >
                                Usuario Prueba
                            </Typography>
                            <Typography level="body-xs" >
                                Nutricionista
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                { children }
            </Box>
        </Box>
    )
}