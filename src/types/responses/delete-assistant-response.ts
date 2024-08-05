import { User } from "../user";

export type DeleteAssistantResponse = {
    message: string;
    assistant: User;
}