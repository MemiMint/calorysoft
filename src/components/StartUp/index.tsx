import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/joy";
import logo from "../../assets/LogoCalorysoft.png"
import { WithFade } from "../animations/WithFade";

export const StartUp: FunctionComponent = (): JSX.Element => {
    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
            navigate("/init");
        }, 5000)
    }, [])

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