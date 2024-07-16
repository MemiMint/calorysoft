import { FunctionComponent, useState } from "react";
import Box from "@mui/joy/Box";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Avatar from "@mui/joy/Avatar";
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { FaChevronRight } from 'react-icons/fa6';
import { IProps } from "./props.types";
import { useNavigate } from "react-router-dom";

export const TotalCard: FunctionComponent<IProps> = (props) => {
    const navigate = useNavigate();
    
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onMouseOver = () => {
        setIsHovered(true);
    }

    const onMouseOut = () => {
        setIsHovered(false);
    }
    
    return (
        <Card 
            onClick={() => navigate(props.href!)}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            variant="solid" 
            sx={{
                cursor: "pointer",
                boxShadow: "md",
                bgcolor: "white",
                ":hover": {
                    bgcolor: "#0A80FE",
                },
            }}

        >
            <CardContent sx={{ display: "flex", alignItems: "center" }} orientation="horizontal">
                <Avatar color="primary" size="md">
                    <SvgIcon>
                        { props.icon }
                    </SvgIcon>
                </Avatar>
                <Typography sx={{ color: isHovered ? "common.white" : "neutral" }} level="body-sm">{props.label}</Typography>
            </CardContent>
            <CardContent>
                <Box mt={2} display="flex" alignItems="center" justifyContent="space-between" >
                    <Typography sx={{ color: isHovered ? "white" : "black" }} level="h2">{props.total}</Typography>
                    <SvgIcon size="sm" htmlColor={isHovered ? "white" : "rgba(0, 0, 0, 0.8)"} >
                        <FaChevronRight />
                    </SvgIcon>
                </Box>
            </CardContent>
        </Card>
    );
}