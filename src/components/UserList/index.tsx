import { FunctionComponent } from "react";
import Stack from "@mui/joy/Stack";
import { UserItem } from "./UserItem";
import { IProps } from "./props.types";

export const UserList: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <Stack direction="column" spacing={2}>
            {
                props.patients.length && props.patients.map((patient) => {
                    return (
                        <UserItem 
                            patient={patient}
                        />
                    )
                })
            }
        </Stack>
    )
}