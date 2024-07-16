import { FC } from "react";
import {
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/joy";
import { FaCalendarWeek } from "react-icons/fa6";

export const WeekCard: FC<{ title: string }> = (props): JSX.Element => {
    return (
        <Card
            orientation="horizontal"
            size="sm"
            sx={{ width: 320, bgcolor: 'background.surface', borderRadius: 6, mb: 1 }}
        >
            <CardContent>
                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                >
                    <Box width={40} height={40} display="flex" alignItems="center" justifyContent="center" borderRadius={6} bgcolor="#0A80FE">
                        <FaCalendarWeek color="white" size={16} />
                    </Box>
                    <Typography sx={{ color: "#0A80FE" }} level="title-md">{props.title}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}