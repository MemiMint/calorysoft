import { FunctionComponent } from "react";
import { Box, Typography, List, ListItem } from "@mui/joy";
//import { ListItemIcon } from "@mui/material";
import { IProps } from "./props.types";

export const GroupList: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
            <Box mt={4}>
                <Typography
                    level="body-sm"
                    fontWeight="lg"
                    mb={1}
                    textColor="common.white"
                >
                    { props.label }
                </Typography>
                <List>
                    {
                        props.items && props.items.map((item, index) => {
                            return (
                                <ListItem key={index} sx={{ padding: 0 }} >
                                    <Typography fontWeight="md" level="body-xs">
                                        { item.text }
                                    </Typography>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
    )
}
