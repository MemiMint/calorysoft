import { FunctionComponent } from "react";
import { Typography, Box, SvgIcon, IconButton, Avatar, ButtonGroup, Tooltip } from "@mui/joy";
import { FaNotesMedical, FaEye, FaPencil, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const NutritionalPlanItem: FunctionComponent<{ id: number, title: string }> = (props): JSX.Element => {
    const navigate = useNavigate();
    
    return (
        <Box px={2} height={60} width="100%" bgcolor="white" boxShadow="md" display="flex" alignItems="center" justifyContent="space-between" borderRadius={4}>
            <Box display="flex" alignItems="center" gap={1} >
                <Avatar>
                    <FaNotesMedical />
                </Avatar>
                <Typography level="title-sm">
                    { props.title }
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
                <Tooltip onClick={() => navigate(`/update-nutritional-plan/${props.id}`)} title="Editar paciente" color="primary" size="sm" >
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