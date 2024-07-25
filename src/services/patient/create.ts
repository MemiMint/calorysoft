import { getAxios } from "../../http/axios";
import { patient } from "../../http/endpoints";
import { Patient } from "../../types/patient";

export const createPatient = async (
    firstname: string,
    lastname: string,
    sex: string,
    age: string,
    weight: string,
    physical_activity: string,
    np_id: string,
    email: string,
    notes: string
): Promise<Patient> => {
    const newPatient = await getAxios<{}, Patient>(patient.create, "POST", {
        firstname,
        lastname,
        sex,
        age,
        weight,
        physical_activity: parseInt(physical_activity),
        email,
        notes,
        np_id: parseInt(np_id)
    });

    return newPatient;
}