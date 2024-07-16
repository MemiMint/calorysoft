import { Week } from "../../types/week";

export type IProps = {
    open: boolean;
    onClose(): void;
    onSave(week: Week): void;
}