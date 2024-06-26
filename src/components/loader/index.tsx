import { FunctionComponent } from "react";
import { Box, CircularProgress } from "@mui/joy";

export const Loader: FunctionComponent = (): JSX.Element => {
    return (
        <Box
            position="absolute"
            zIndex={1} 
            width="100%" 
            height="100%" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            top={0}
            left={0}
            bgcolor="rgba(0, 0, 0, 0.4)"
        >
            <CircularProgress />
        </Box>
    )
}