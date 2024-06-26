import { FunctionComponent } from "react";
import { Box, Button, FormControl, Input, Typography } from "@mui/joy";
import { IProps } from "../props.type";
import { WithFadeIn } from "../../../animations/WithFadeIn";

export const StepFive: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <WithFadeIn>
            <Typography level="h1" fontSize={45} color="primary">Ingrese una contraseña</Typography>
            <Typography mt={2} level="title-md" fontSize={25} color="neutral">Escriba una contraseña para el inicio de sesión</Typography>
            <FormControl sx={{ marginTop: 6 }}>
                <Box display="flex" flexDirection="column" >
                    <Input value={props.value} name="password" onChange={props.onChange} sx={{ height: 50, fontWeight: 600 }} placeholder="contraseña" type="password" />
                    <Box mt={2} display="flex" alignItems="center" justifyContent="flex-end" >
                        <Button onClick={props.onClick} disabled={props.value.length === 0}>Registarse</Button>
                    </Box>
                </Box>
            </FormControl>
        </WithFadeIn>
    )
}