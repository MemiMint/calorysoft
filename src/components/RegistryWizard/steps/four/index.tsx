import { FunctionComponent } from "react";
import { Box, Button, FormControl, Input, Typography } from "@mui/joy";
import { ArrowRightIcon } from "../../../icons/RightArrow";
import { IProps } from "../props.type";
import { WithFadeIn } from "../../../animations/WithFadeIn";

export const StepFour: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <WithFadeIn>
            <Typography level="h1" fontSize={45} color="primary">Ingrese un nombre de usuario</Typography>
            <Typography mt={2} level="title-md" fontSize={25} color="neutral">Escriba un nombre de usuario para su inicio de sesion</Typography>
            <FormControl sx={{ marginTop: 6 }}>
                <Box display="flex" flexDirection="column" >
                    <Input name="username" value={props.value} onChange={props.onChange} sx={{ height: 50, fontWeight: 600 }} placeholder="nombre de usuario" />
                    <Box mt={2} display="flex" alignItems="center" justifyContent="flex-end" >
                        <Button disabled={props.value.length === 0} onClick={() => props.onChangeIndex(5)} endDecorator={<ArrowRightIcon />} >Continuar</Button>
                    </Box>
                </Box>
            </FormControl>
        </WithFadeIn>
    )
}