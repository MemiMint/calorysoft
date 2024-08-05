import { Patient } from "../patient";

export type CreatePatientResponse = {
    message: string;
    patient: Patient;
}