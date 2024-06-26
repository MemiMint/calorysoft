import { FunctionComponent } from "react";
import { Box, Button, SvgIcon } from "@mui/joy";
import { ArrowLeftIcon } from "../../../icons/LeftArrow";
import { ArrowRightIcon } from "../../../icons/RightArrow";
import { IProps } from "./props.types";

export const BackForward: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <Box mb={4} display="flex" alignItems="center" justifyContent="space-between" width="100%" >
            <Button onClick={props.onChangeBack} >
                <SvgIcon>
                    <ArrowLeftIcon />
                </SvgIcon>
            </Button>
            <Button onClick={props.onChangeForward}>
                <SvgIcon>
                    <ArrowRightIcon />
                </SvgIcon>
            </Button>
            </Box>
    )
}