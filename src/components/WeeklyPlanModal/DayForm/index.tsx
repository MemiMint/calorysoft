import React, { FunctionComponent } from "react";
import { Box, Typography, Textarea, Divider } from "@mui/joy";
import { Day } from "../../../types/day";

type IProps = {
    state: Day;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const DayForm: FunctionComponent<IProps> = (props): JSX.Element => {
    
    return (
        <Box width="100%" >
            <Box py={2} display="flex" alignItems="center" gap={4}>
                <Box>
                    <Typography level="title-sm">
                        Desayuno
                    </Typography>
                </Box>
                <Box width="100%" display="flex" alignItems="center" gap={2} >
                    <Textarea 
                        name="breakfast"
                        value={props.state.breakfast}
                        onChange={props.onChange}
                        sx={{ width: "100%", height: 100, fontSize: 14 }} 
                        size="lg" 
                        placeholder="" 
                    />
                </Box>
            </Box>
            <Divider />
            <Box py={2} display="flex" alignItems="center" gap={4}>
                <Box>
                    <Typography level="title-sm">
                        Almuerzo
                    </Typography>
                </Box>
                <Box width="100%" display="flex" alignItems="center" gap={2} >
                    <Textarea name="lunch" value={props.state.lunch} onChange={props.onChange} sx={{ width: "100%", height: 100, fontSize: 14 }} size="lg" placeholder="" />
                </Box>
            </Box>
            <Divider />
            <Box py={2} display="flex" alignItems="center" gap={4}>
                <Box>
                    <Typography level="title-sm">
                        Merienda
                    </Typography>
                </Box>
                <Box width="100%" display="flex" alignItems="center" gap={2} >
                    <Textarea name="snack" value={props.state.snack} onChange={props.onChange} sx={{ width: "100%", height: 100, fontSize: 14 }} size="lg" placeholder="" />
                </Box>
            </Box>
            <Divider />
            <Box py={2} display="flex" alignItems="center" gap={4}>
                <Box>
                    <Typography level="title-sm">
                        Cena
                    </Typography>
                </Box>
                <Box width="100%" display="flex" alignItems="center" gap={2} >
                    <Textarea name="dinner" value={props.state.dinner} onChange={props.onChange} sx={{ width: "100%", height: 100, fontSize: 14 }} size="lg" placeholder="" />
                </Box>
            </Box>
            <Divider />
        </Box>
    )
}