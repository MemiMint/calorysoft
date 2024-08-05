import { getPatients } from "../../services/patient/patients";
import { Patient } from "../../types/patient";
import { ActionType } from "../action-types";
import { Action } from "../actions";


const initialState: Patient[] = [];

const reducer = async (state: Patient[] = initialState, action: Action): Promise<Patient[]> => {
    switch (action.type) {
        case ActionType.GET_PATIENTS: {
            const response: Patient[] = await getPatients();

            state = response;

            return state
        }

        case ActionType.ADD_PATIENT: {
            state = [...state, {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                age: action.payload.age,
                email: action.payload.email,
                notes: action.payload.notes,
                np_id: action.payload.np_id,
                height: action.payload.height,
                physical_activity: action.payload.physical_activity,
                phonenumber: action.payload.phonenumber,
                sex: action.payload.sex,
                weight: action.payload.weight
            }];

            return state;
        }

        default: {
            return state;
        }
    }
}

export default reducer;