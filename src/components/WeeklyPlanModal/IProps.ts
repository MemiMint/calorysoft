import { Week } from "../../types/week";

export type IProps = {
    selectedWeek?: Week | null;
    open: boolean;
    onClose(): void;
    onSave(week: Week): void;
}