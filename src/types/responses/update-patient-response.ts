import { Patient } from "../patient";

export type UpdatePatientResponse = {
    message: string;
    patient: Patient;
}