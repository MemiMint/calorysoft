import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/joy";
import { IProps } from "./props.types";

export const StepIndex: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <Box width="100%" display="flex" alignItems="center" justifyContent="center" gap={1}>
            <Box bgcolor={props.currentIndex === props.id ? "white" : undefined} width={26} height={26} border="dashed white" display="flex" alignItems="center" justifyContent="center" >
                <Typography fontWeight={600} level="title-sm" textColor={props.currentIndex === props.id ? "#0A80FE" : "common.black"}>{props.id}</Typography>
            </Box>
            <Box marginLeft={6}>
                <Typography level="title-sm" textColor="common.white">{props.title}</Typography>
            </Box>
        </Box>
    )
}