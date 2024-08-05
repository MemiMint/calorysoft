import { FC, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
    IconButton,
    SvgIcon
} from "@mui/joy";
import { FaCalendarWeek, FaX, FaPencil } from "react-icons/fa6";

export const WeekCard: FC<{ title: string, onDelete(): void, onEdit?(): void }> = (props): JSX.Element => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onMouseOver = () => {
        setIsHovered(true);
    }

    const onMouseOut = () => {
        setIsHovered(false);
    }
    
    return (
        <Card
            orientation="horizontal"
            size="sm"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            sx={{ width: 320, bgcolor: isHovered ? "#0A80FE" : "white", borderRadius: 6, mb: 1, boxShadow: "md", border: 0 }}
        >
            <CardContent>
                <Box 
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                    >
                        <Box width={40} height={40} display="flex" alignItems="center" justifyContent="center" borderRadius={6} bgcolor={isHovered ? "white" : "#0A80FE"}>
                            <FaCalendarWeek color={isHovered ? "#0A80FE" : "white"} size={16} />
                        </Box>
                        <Typography sx={{ color: isHovered ? "white" : "#0A80FE" }} level="title-md">{props.title}</Typography>
                    </Box>
                    <Stack direction="row" spacing={1} >
                        <IconButton onClick={props.onEdit}  sx={{ bgcolor: isHovered ? "white" : "#0A80FE" }} >
                            <SvgIcon sx={{ color: isHovered ? "#0A80FE" : "white" }} size="sm" >
                                <FaPencil />
                            </SvgIcon>
                        </IconButton>
                        <IconButton onClick={props.onDelete} sx={{ bgcolor: isHovered ? "white" : "#0A80FE" }} >
                            <SvgIcon sx={{ color: isHovered ? "#0A80FE" : "white" }} size="sm" >
                                <FaX />
                            </SvgIcon>
                        </IconButton>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    )
}