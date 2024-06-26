import React, { FunctionComponent } from "react";
import "./styles.css";
import { Box } from "@mui/joy";

export const WithFadeIn: FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box className="fade-in" >
            { children }
        </Box>
    )
}

