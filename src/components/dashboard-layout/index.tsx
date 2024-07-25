import React, { FunctionComponent } from "react";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import IconButton from "@mui/joy/IconButton";
import { Sidebar } from "../sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { ipcRenderer } from "electron";
import MinimizeIcon from '@mui/icons-material/Minimize';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';


export const DashboardLayout: FunctionComponent<{ children?: React.ReactNode }> = ({ children }): JSX.Element => {
    const currentUser = useSelector((state: RootState) => state.currentUser);

    return (
        <Box display="flex">
            <Sidebar />
            <Box flex={1} bgcolor="#FCFCFE" padding={4}>
                <Box position="sticky" top={0} display="flex" flexDirection="column" alignItems="flex-end" justifyContent="flex-end" >
                    <Box display="flex" alignItems="center" justifyContent="flex-end" gap={1} >
                        <IconButton onClick={() => ipcRenderer.send("minimize")} >
                            <SvgIcon>
                                <MinimizeIcon />
                            </SvgIcon>
                        </IconButton>
                        <IconButton onClick={() => ipcRenderer.send("closeApp")} >
                            <SvgIcon>
                                <DisabledByDefaultIcon />
                            </SvgIcon>
                        </IconButton>
                    </Box>
                    <Box mt={2} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", ":hover": { backgroundColor: "red" } }} gap={1} display="flex" padding={1} borderRadius={4} bgcolor="white">
                        <Avatar size="lg" variant="solid" />
                        <Box >
                            <Typography level="title-sm" >
                                {currentUser?.firstname} {currentUser?.lastname}
                            </Typography>
                            <Typography level="body-xs" >
                                {currentUser?.role === 1 ? "Nutricionista" : "Asistente"}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {children}
            </Box>
        </Box>
    )
}