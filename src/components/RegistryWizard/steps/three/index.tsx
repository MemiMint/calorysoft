import { FunctionComponent } from "react";
import { Box, Button, FormControl, Input, Typography } from "@mui/joy";
import { ArrowRightIcon } from "../../../icons/RightArrow";
import { IProps } from "../props.type";
import { WithFadeIn } from "../../../animations/WithFadeIn";

export const StepThree: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <WithFadeIn>
            <Typography level="h1" fontSize={45} color="primary">Ingrese su cedula de identidad</Typography>
            <Typography mt={2} level="title-md" fontSize={25} color="neutral">Escriba su cedula de identidad en el campo de texto de abajo</Typography>
            <FormControl sx={{ marginTop: 6 }}>
                <Box display="flex" flexDirection="column" >
                    <Input name="did" value={props.value} onChange={props.onChange} sx={{ height: 50, fontWeight: 600 }} placeholder="cedula de identidad" />
                    <Box mt={2} display="flex" alignItems="center" justifyContent="flex-end" >
                        <Button disabled={props.value.length === 0} onClick={() => props.onChangeIndex(4)} endDecorator={<ArrowRightIcon />} >Continuar</Button>
                    </Box>
                </Box>
            </FormControl>
        </WithFadeIn>
    )
}