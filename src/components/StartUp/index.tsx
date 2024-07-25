import { FunctionComponent, useEffect } from "react";
import { Box } from "@mui/joy";
import logo from "../../assets/LogoCalorysoft.png"
import { WithFade } from "../animations/WithFade";
import { doesAdminExists } from "../../services/admin-exists";
import { useNavigate } from "react-router-dom";

export const StartUp: FunctionComponent = (): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(async () => {
            const exists: boolean = await doesAdminExists();

            if (exists) {
                navigate("/login");

                return;
            }

            navigate("/init");
        }, 3000)
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