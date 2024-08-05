export type CurrentUserPayload = {
    uuid: string;
    firstname: string;
    lastname: string;
    username: string;
    role: number;
}

export type AlertPayload = {
    open: boolean;
    title: string;
    type: "success" | "warning" | "error" | "info";
    subtitle?: string;
}