import { FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemDecorator, SvgIcon } from "@mui/joy";
import { IProps } from "./props.types";

export const GroupList: FunctionComponent<IProps> = (props): JSX.Element => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <Box width="100%" mt={4}>
            <Typography
                level="body-sm"
                fontWeight="lg"
                mb={1}
                textColor="common.white"
            >
                {props.label}
            </Typography>
            <List>
                {
                    props.items && props.items.map((item, index) => {
                        return (
                            <ListItem onClick={() => navigate(item.href ? item.href : "/dashboard")} key={index} sx={{ cursor: "pointer", borderRadius: 4, backgroundColor: pathname === item.href ? "white" : "#0A80FE" }} >
                                <ListItemDecorator>
                                    <SvgIcon htmlColor={pathname === item.href ? "#0A80FE" : "white"} >
                                        { item.icon }
                                    </SvgIcon>
                                </ListItemDecorator>
                                <Typography sx={{ color: pathname === item.href ? "#0A80FE" : "white" }} fontWeight="md" level="body-xs">
                                    {item.text}
                                </Typography>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    )
}
