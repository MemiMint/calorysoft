import { FunctionComponent } from "react";
import { Typography, Box, SvgIcon, IconButton, Stack, Avatar, Chip, ButtonGroup, Tooltip } from "@mui/joy";
import { FaUser, FaEye, FaPencil, FaTrash, FaUserNurse } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IProps } from "./props.types"

export const UserItem: FunctionComponent<IProps> = (props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Box px={2} height={60} width="100%" bgcolor="white" boxShadow="md" display="flex" alignItems="center" justifyContent="space-between" borderRadius={4}>
            <Box display="flex" alignItems="center" gap={1} >
                <Avatar>
                    <FaUserNurse />
                </Avatar>
                <Typography level="title-sm">
                    { props.assistant.firstname } { props.assistant.lastname }
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Chip>
                        { props.assistant.cid }
                    </Chip>
                </Stack>
            </Box>
            <ButtonGroup spacing={0.5}>
                <Tooltip title="Editar Asistente" color="primary" size="sm" >
                    <IconButton onClick={() => navigate(`/update-assistant/${props.assistant.uuid}`)} variant="solid" color="primary" size="sm" >
                        <SvgIcon size="sm" >
                            <FaPencil />
                        </SvgIcon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Eliminar Asistente" color="danger" size="sm" >
                    <IconButton onClick={() => props.onDelete(props.assistant.uuid)} variant="solid" color="danger" size="sm" >
                        <SvgIcon size="sm" >
                            <FaTrash />
                        </SvgIcon>
                    </IconButton>
                </Tooltip>
            </ButtonGroup>
        </Box>
    )
}