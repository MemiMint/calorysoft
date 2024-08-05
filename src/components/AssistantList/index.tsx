import { FunctionComponent } from "react";
import Stack from "@mui/joy/Stack";
import { UserItem } from "./UserItem";
import { User } from "../../types/user";

export const AssistantList: FunctionComponent<{ assistants: User[], onDelete: (uid: string) => void; }> = (props): JSX.Element => {
    return (
        <Stack direction="column" spacing={2}>
            {
                props.assistants.length && props.assistants.map((assistant) => {
                    return (
                        <UserItem 
                            onDelete={props.onDelete}
                            assistant={assistant}
                        />
                    )
                })
            }
        </Stack>
    )
}