import { getAxios } from "../../http/axios";
import { patient } from "../../http/endpoints";
import { Patient } from "../../types/patient";
import { PatientsResponse } from "../../types/responses/patients-response";

export const getPatient = async (id: string): Promise<Patient> => {
    const response = await getAxios(`${patient.patient}/${id}`, "GET");

    const data: Patient = await response.data.patient;

    return data;
}