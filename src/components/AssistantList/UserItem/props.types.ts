import { User } from "../../../types/user";

export type IProps = {
    id: string;
    onDelete: (uid: string) => void;
    assistant: User;
}