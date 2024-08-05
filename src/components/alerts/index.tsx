import { FC } from "react";
import { Snackbar as MuiSnackbar} from "@mui/material";
import { Alert, IconButton, Snackbar } from "@mui/joy";
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

type IProps = {
    open: boolean;
    type: "success" | "warning" | "error" | "neutral";
    title: string;
    subtitle?: string;
    onClose(): void;
}

type AlertStyle = {
    icon?: React.ReactNode | null;
    color: string;
}

export const ResponseAlert: FC<IProps> = (props): JSX.Element => {
    let alert: AlertStyle = { color: "neutral", icon: <InfoIcon /> }

    if (props.type === "success") {
        alert = {
            color: "success",
            icon: <CheckCircleIcon />
        };
    }

    else if (props.type === "warning") {
        alert = {
            color: "warning",
            icon: <WarningIcon />
        };
    }

    else if (props.type === "error") {
        alert = {
            color: "danger",
            icon: <ReportIcon />
        };
    }

    return (
        <Snackbar variant="plain" open={props.open} onClose={props.onClose} autoHideDuration={3000} >
            <Alert  
              color={alert.color as any}
              startDecorator={alert.icon}
              variant="soft"
              endDecorator={
                <IconButton onClick={props.onClose} variant="soft" color={alert.color as any} >
                    <CloseRoundedIcon />
                </IconButton>
              }
            >
                <div>{ props.title }</div>
            </Alert>
        </Snackbar>
    )
}