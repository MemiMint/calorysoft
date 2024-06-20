import React, { FunctionComponent } from "react";
import { IProps } from "./props.types";
import { Box } from "@mui/joy";
import "./index.css";

export const WithFade: FunctionComponent<IProps> = ({ children }): JSX.Element => {
    return (
        <Box className="fade" >
            { children }
        </Box>
    )
}