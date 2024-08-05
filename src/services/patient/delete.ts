import { getAxios } from "../../http/axios";
import { patient } from "../../http/endpoints";
import { PatientsResponse } from "../../types/responses/patients-response";
import { UpdatePatientResponse } from "../../types/responses/update-patient-response";

export const deletePatient = async (id: number): Promise<UpdatePatientResponse> => {
    const response = await getAxios(`${patient.patient}/${id}`, "DELETE");

    const data: UpdatePatientResponse = await response.data;

    return data;
}