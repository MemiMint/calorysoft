import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginState } from "./state";
import { signIn } from "../../services/auth/signin";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";


const INITIAL_STATE: Readonly<ILoginState> = {
    username: "",
    password: "",
}


export const useLogin = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { startLoading, finishLoading } = bindActionCreators(actionCreators, dispatch);

    const [state, setState] = useState<ILoginState>(INITIAL_STATE);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onClick = async (): Promise<void> => {
        startLoading();

        try {
            const response = await signIn(state.username, state.password);

            if (response.token) {
                localStorage.setItem("token", response.token);
                navigate("/dashboard");
            }

        } catch (error: any) {
            console.error("Algo paso");
        } finally {
            finishLoading();
        }
    }

    return {
        state,
        onChange,
        onClick
    }
}