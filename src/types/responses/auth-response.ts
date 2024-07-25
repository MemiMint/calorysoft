import { User } from "../user";

export type AuthResponse = {
    status: number;
    success: boolean;
    message?: string;
    token?: string;
    user?: User;
}