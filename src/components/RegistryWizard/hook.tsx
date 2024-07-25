import React, { useState } from "react";
import { signUp } from "../../services/auth/signup";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store"
import { useNavigate } from "react-router-dom";

type IState = {
    firstname: string;
    lastname: string;
    cid: string;
    username: string;
    password: string;
}

export const useRegistryWizard = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { finishLoading, startLoading } = bindActionCreators(actionCreators, dispatch);

    const [index, setIndex] = useState<number>(5);

    const [state, setState] = useState<IState>({
        firstname: "yeferson",
        lastname: "sss",
        cid: "sss",
        username: "ss",
        password: "sss"
    });

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isResponseModalOpen, setIsResponseModalOpen] = useState<boolean>(false);
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [isSuccess, setIsSuccess] = useState<boolean>(false);


    const onConfirm = async (): Promise<void> => {
        setIsModalOpen(false);

        startLoading();
        
        try {
            const response = await signUp(
                state.firstname,
                state.lastname,
                state.cid,
                state.username,
                state.password,
                1
            );

            setIsResponseModalOpen(true);
            setIsSuccess(response.success);

            if (!response.success) {
                setResponseMessage(response.message!);
            }

            setResponseMessage(response.message!);
        } catch (error) {
            setIsResponseModalOpen(true);
            setResponseMessage("Ha ocurrido un error interno");
        } finally {
            finishLoading();
        }
    }

    const onContinue = () => {
        if (isSuccess) {
            navigate("/login");
        }

        toggleResponseModal();
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const toggleResponseModal = () => {
        setIsResponseModalOpen(!isResponseModalOpen);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onChangeIndexBackAndForth = (direction: "back" | "forward") => {
        if (((direction === "back") && (index === 1)) || ((direction === "forward") && (index === 5))) {
            return;
        }

        if (direction === "back") {
            setIndex((prevState) => prevState - 1);
        } else {
            setIndex((prevState) => prevState + 1);
        }
    }

    const onChangeIndex = (newIndex: number) => {
        setIndex(newIndex);
    }

    return {
        onConfirm,
        state,
        index,
        responseMessage,
        isModalOpen,
        isResponseModalOpen,
        onChangeIndexBackAndForth,
        onChangeIndex,
        onChange,
        toggleModal,
        toggleResponseModal,
        onContinue
    }
}