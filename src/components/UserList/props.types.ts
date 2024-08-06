import { Patient } from "../../types/patient";

export type IProps = {
    readOnly?: boolean;
    onDelete: (id: number) => void;
    patients: Patient[];
};