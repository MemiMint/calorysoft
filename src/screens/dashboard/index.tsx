import { FunctionComponent } from "react";
import { Box } from "@mui/joy";
import { Sidebar } from "../../components/sidebar";

export const Dashboard: FunctionComponent = (): JSX.Element => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box>

            </Box>
        </Box>
    )
}