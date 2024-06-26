import { FunctionComponent } from "react";
import { Box, Typography, Stack } from "@mui/joy"
import altLogo from "../../../../assets/logoCalorysoft3.png";
import { Clock } from "../../../icons/Clock";
import { StepIndex } from "../StepIndex";
import { IProps } from "./props.types";

type IStep = {
    id: number;
    title: string;
}

const steps: IStep[] = [
    {
        id: 1,
        title: "Ingrese su nombre"
    },
    {
        id: 2,
        title: "Ingrese su apellido"
    },
        {
        id: 3,
        title: "Ingrese su cedula"
    },
    {
        id: 4,
        title: "Ingrese su usuario"
    },
    {
        id: 5,
        title: "Ingrese su contraseña"
    }
]

export const StepSidebar: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <Box height="100vh" width={300} bgcolor="#0A80FE" padding={6} >
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <img src={altLogo} alt="" />
                <Typography mt={4} textColor="common.white" level="body-md" textAlign="center">Empecemos ingresando sus datos</Typography>
                <Typography borderRadius={4} startDecorator={<Clock />} padding={1} variant="soft" bgcolor="#0973E3" mt={2} textColor="common.white" level="body-xs" textAlign="center">Esto tomara un minuto</Typography>
            </Box>
            <Stack width="100%" mt={4} direction="column" spacing={4} >
                {
                    steps && steps.map((step) => {
                        return (
                            <StepIndex currentIndex={props.currentIndex} id={step.id} title={step.title} />
                        )
                    })
                }
            </Stack>
        </Box>
    )
}