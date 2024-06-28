export type Screen = "/" | "init" | "login" | "registry" | "dashboard";

export function goto(screen: Screen): string {
    return screen;
}
