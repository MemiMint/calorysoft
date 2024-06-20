import React, { FunctionComponent } from "react";
import { Box } from "@mui/joy";
import logo from "../../assets/LogoCalorysoft.png"
import { WithFade } from "../WithFade";

export const StartUp: FunctionComponent = (): JSX.Element => {
    return (
        <WithFade>
            <Box
                position="fixed"
                top="50%"
                left="50%"
                textAlign="center"
                marginTop="-50px"
                marginLeft="-100px"
            >
                <img src={logo} />
            </Box>
        </WithFade>
    )
}