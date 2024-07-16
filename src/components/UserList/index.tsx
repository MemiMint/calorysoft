import { FunctionComponent } from "react";
import Stack from "@mui/joy/Stack";
import { UserItem } from "./UserItem";
import { IProps } from "./props.types";

export const UserList: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <Stack direction="column" spacing={2}>
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
        </Stack>
    )
}