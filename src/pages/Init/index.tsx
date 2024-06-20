import { Box, Button, Typography } from "@mui/joy";
import React, { FunctionComponent } from "react";
import { ArrowRightIcon } from "../../components/icons/RightArrow";
import logo from "../../assets/LogoCalorysoft.png";
import "./style.css";

export const Init: FunctionComponent = (): JSX.Element => {
    return (
        <Box
            className="fade-in"
            width="100%"
            height="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={6}
        >
            <img src={logo}  />
            <Typography level="h1" color="primary" >
                Bienvenido a Calorysoft
            </Typography>
            <Typography level="body-lg">Antes de empezar nos gustaria que nos proporcionaras algunos datos</Typography>
            <Button size="lg" endDecorator={<ArrowRightIcon/>}>Proceder</Button>
        </Box>
    )
}