import { User } from "../../../types/user";

export type IProps = {
    onDelete: (uid: string) => void;
    assistant: User;
}