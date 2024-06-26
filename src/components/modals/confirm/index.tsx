import { FunctionComponent } from "react";
import { Button, DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog } from "@mui/joy";
import { AlertCircleIcon } from "../../icons/Alert";
import { IProps } from "./props.types";

export const ConfirmModal: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <Modal open={props.open} >
            <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                    { props.icon ? props.icon : <AlertCircleIcon /> }
                    { props.title }
                </DialogTitle>
                <Divider />
                <DialogContent>
                    { props.content }
                </DialogContent>
                <DialogActions>
                    <Button variant="solid" color="primary" onClick={props.onConfirm}>
                        Confirmar
                    </Button>
                    <Button variant="plain" color="neutral" onClick={props.onCancel}>
                        Cancelar
                    </Button>
                </DialogActions>
            </ModalDialog>
      </Modal>
    )
}