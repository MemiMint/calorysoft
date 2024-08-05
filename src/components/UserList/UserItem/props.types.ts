import { Patient } from "../../../types/patient"

export type IProps = {
    onDelete: (id: number) => void;
    patient: Patient;
}