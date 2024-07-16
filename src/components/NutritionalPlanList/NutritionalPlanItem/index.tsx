import { FunctionComponent } from "react";
import { Typography, Box, SvgIcon, IconButton, Avatar, ButtonGroup, Tooltip } from "@mui/joy";
import { FaNotesMedical, FaEye, FaPencil, FaTrash } from "react-icons/fa6";

export const NutritionalPlanItem: FunctionComponent = (): JSX.Element => {
    return (
        <Box px={2} height={60} width="100%" bgcolor="white" boxShadow="md" display="flex" alignItems="center" justifyContent="space-between" borderRadius={4}>
            <Box display="flex" alignItems="center" gap={1} >
                <Avatar>
                    <FaNotesMedical />
                </Avatar>
                <Typography level="title-sm">
                    Plan Nutricional Uno
                </Typography>
            </Box>
            <ButtonGroup spacing={0.5}>
                <Tooltip title="ver paciente" color="primary" size="sm">
                    <IconButton variant="solid" color="primary" size="sm" >
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