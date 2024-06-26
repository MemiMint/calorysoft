
type ConfirmModalProps = {
    open: boolean;
    icon?: React.ReactNode;
    title: string;
    content: string;
    onCancel?(): void;
    onConfirm?(): void;
}


export type IProps = ConfirmModalProps;