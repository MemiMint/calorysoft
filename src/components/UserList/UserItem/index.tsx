import { FunctionComponent } from "react";
import { Typography, Box, SvgIcon, IconButton, Stack, Avatar, Chip, ButtonGroup, Tooltip } from "@mui/joy";
import { FaUser, FaEye, FaPencil, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const UserItem: FunctionComponent = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Box px={2} height={60} width="100%" bgcolor="white" boxShadow="md" display="flex" alignItems="center" justifyContent="space-between" borderRadius={4}>
            <Box display="flex" alignItems="center" gap={1} >
                <Avatar>
                    <FaUser />
                </Avatar>
                <Typography level="title-sm">
                    Alejandro Martinez
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Chip>
                        Plan Nutricional Uno
                    </Chip>
                </Stack>
            </Box>
            <ButtonGroup spacing={0.5}>
                <Tooltip title="ver paciente" color="primary" size="sm">
                    <IconButton onClick={() => navigate("/patient/888")} variant="solid" color="primary" size="sm" >
                        <SvgIcon size="sm" >
                            <FaEye />
                        </SvgIcon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar paciente" color="primary" size="sm" >
                    <IconButton variant="solid" color="primary" size="sm" >
                        <SvgIcon size="sm" >
                            <FaPencil />
                        </SvgIcon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Eliminar paciente" color="danger" size="sm" >
                    <IconButton variant="solid" color="danger" size="sm" >
                        <SvgIcon size="sm" >
                            <FaTrash />
                        </SvgIcon>
                    </IconButton>
                </Tooltip>
            </ButtonGroup>
        </Box>
    )
}