import { FunctionComponent } from "react";
import { Box } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { StepSidebar } from "./components/StepSidebar";
import { StepOne } from "./steps/one";
import { StepTwo } from "./steps/two";
import { StepThree } from "./steps/three";
import { StepFour } from "./steps/four";
import { useRegistryWizard } from "./hook";
import { StepFive } from "./steps/five";
import { BackForward } from "./components/BackForward";
import { ConfirmModal } from "../modals/confirm";
import { ResponseModal } from "../modals/response";
import { Loader } from "../loader";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

export const RegistryWizard: FunctionComponent = () => {
    const isLoading = useSelector((state: RootState) => state.loading);

    const {
      responseMessage,
      state, 
      index, 
      isModalOpen,
      isResponseModalOpen, 
      onChangeCid,
      onChange, 
      onChangeIndex, 
      onChangeIndexBackAndForth,
      toggleModal,
      onConfirm,
      onContinue
    } = useRegistryWizard();
    
    return (
        <Box
        className="fade-in"
        width="100%"
        height="100vh"
        display="flex"
    >
        <Box flex={1} padding={20} position="relative">
            { isLoading && <Loader /> }
            { (state.password !== "") && <BackForward onChangeBack={() => onChangeIndexBackAndForth("back")} onChangeForward={() => onChangeIndexBackAndForth("forward")} /> }
            { (index === 1) && <StepOne value={state.firstname} currentIndex={index} onChange={onChange} onChangeIndex={(newIndex) => onChangeIndex(newIndex)} />  }
            { (index === 2) && <StepTwo value={state.lastname} currentIndex={index} onChange={onChange} onChangeIndex={(newIndex) => onChangeIndex(newIndex)} />  }
            { (index === 3) && <StepThree value={state.cid} currentIndex={index} onChange={onChangeCid} onChangeIndex={(newIndex) => onChangeIndex(newIndex)} /> }
            { (index === 4) && <StepFour value={state.username} currentIndex={index} onChange={onChange} onChangeIndex={(newIndex) => onChangeIndex(newIndex)} /> }
            { (index === 5) && <StepFive value={state.password} currentIndex={index} onChange={onChange} onChangeIndex={(newIndex) => onChangeIndex(newIndex)} onClick={toggleModal} /> }
        </Box>
        <StepSidebar currentIndex={index} />
        <ConfirmModal 
            open={isModalOpen} 
            title="¿Estás seguro?" 
            content="Al continuar se registrará una cuenta con estos datos, ¿estás seguro?" 
            onCancel={toggleModal}
            onConfirm={onConfirm}
        />
        <ResponseModal open={isResponseModalOpen} content={responseMessage} onClick={onContinue} /> 
    </Box>
    )
}