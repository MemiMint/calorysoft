import React, { useEffect, useState } from "react";
import { createAssistant } from "../../services/assistants/create";
import { getAssistant } from "../../services/assistants/get-assistant";
import { updateAssistant } from "../../services/assistants/update";
import { NutritionalPlan } from "../../types/nutritional-plan";

type IState = {
    firstname: string;
    lastname: string;
    cid: string;
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    phonePrefix: string;
};

export const useUpdateAsistant = (id: string) => {
    const [state, setState] = useState<IState>({
        firstname: "",
        cid: "",
        lastname: "",
        password: "",
        email: "",
        phonenumber: "",
        username: "",
        phonePrefix: ""
    });

    const [alertState, setAlertState] = useState({
        open: false,
        title: "",
        type: ""
    });

    const onFetchAssistant = async () => {
        const assistant = await getAssistant(id);

        setState(({
            firstname: assistant.firstname,
            lastname: assistant.lastname,
            cid: assistant.cid,
            password: assistant.password,
            email: "",
            phonenumber: assistant.phonenumber,
            phonePrefix: "",
            username: assistant.username
        }))
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onChangeSelect = (event: React.SyntheticEvent, newValue: string) => {
        setState((prevState) => ({
            ...prevState,
            phonePrefix: newValue
        }));
    }
    
    const onClose = () => setAlertState((prevState) => ({ ...prevState, open: false }));


    const onClick = async (): Promise<void> => {
        try {
            const response = await updateAssistant(id, { 
                firstname: state.firstname,
                lastname: state.lastname,
                cid: state.cid,
                username: state.username,
                phonenumber: `${state.phonePrefix}-${state.phonenumber}`
             });

            setAlertState((prevState) => ({
                ...prevState,
                title: response.message!,
                type: "success"
            }))
        } catch (error) {
            setAlertState((prevState) => ({
                ...prevState,
                title: "No se pudo registrar el asistente",
                type: "error"
            }))
        } finally {
            setAlertState((prevState) => ({
                ...prevState,
                open: true
            }));
        }
    }

    useEffect(() => {
        onFetchAssistant();
    }, [])

    return {
        state,
        alertState,
        onChange,
        onChangeSelect,
        onClick,
        onClose
    }
}