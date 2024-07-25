import { FunctionComponent } from "react";
import {Box, Button, DialogContent, Modal, ModalDialog, Typography } from "@mui/joy";
import { IProps } from "./props.types";
import { SuccessIcon } from "../../icons/Success";
import { ErrorRounded } from "@mui/icons-material";

export const ResponseModal: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <Modal open={props.open}>
            <ModalDialog>
                <DialogContent>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4} >
                       <Box display="flex" alignItems="center" justifyContent="center" width={50} height={50} borderRadius="100%" border="2px solid">
                            { props.sucess ? <SuccessIcon /> : <ErrorRounded /> }
                       </Box> 
                       <Typography>{ props.content }</Typography>
                       <Button onClick={props.onClick}>Continuar</Button>
                    </Box>
                </DialogContent>
            </ModalDialog>            
        </Modal>
    )
}