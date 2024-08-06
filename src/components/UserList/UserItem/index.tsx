import { FunctionComponent, useEffect, useState } from "react";
import { Typography, Box, SvgIcon, IconButton, Stack, Avatar, Chip, ButtonGroup, Tooltip } from "@mui/joy";
import { FaUser, FaEye, FaPencil, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IProps } from "./props.types"
import { NutritionalPlan } from "../../../types/nutritional-plan";
import { getNutritionalPlan } from "../../../services/nutritional_plans/get-np";

export const UserItem: FunctionComponent<IProps> = (props): JSX.Element => {
    const navigate = useNavigate();

    const [np, setNp] = useState<NutritionalPlan | null>(null);

    const onFetchNP = async () => {
        const response = await getNutritionalPlan(props.patient.np_id);

        setNp({
            title: response.title,
            description: response.description,
            id: response.id,
            weekly_plans: []
        });
    }

    useEffect(() => {
        onFetchNP();
    }, [])

    return (
        <Box px={2} height={60} width="100%" bgcolor="white" boxShadow="md" display="flex" alignItems="center" justifyContent="space-between" borderRadius={4}>
            <Box display="flex" alignItems="center" gap={1} >
                <Avatar>
                    <FaUser />
                </Avatar>
                <Typography level="title-sm">
                    {props.patient.firstname} {props.patient.lastname}
                </Typography>
                <Stack direction="row" spacing={2}>
                    {np && (
                        <Chip>
                            { np.title }
                        </Chip>
                    )}
                </Stack>
            </Box>
            <ButtonGroup spacing={0.5}>
                <Tooltip title="ver paciente" color="primary" size="sm">
                    <IconButton onClick={() => navigate(`/report/${props.patient.id}`)} variant="solid" color="primary" size="sm" >
                        <SvgIcon size="sm" >
                            <FaEye />
                        </SvgIcon>
                    </IconButton>
                </Tooltip>
                {
                    (!props.readOnly) && (
                        <Tooltip title="Editar paciente" color="primary" size="sm" >
                            <IconButton onClick={() => navigate(props.readOnly ? `/report/${props.patient.id}` : `/update-patient/${props.patient.id}`)} variant="solid" color="primary" size="sm" >
                                <SvgIcon size="sm" >
                                    <FaPencil />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                    )
                }
                {
                    (!props.readOnly) && (
                        <Tooltip title="Eliminar paciente" color="danger" size="sm" >
                            <IconButton onClick={() => props.onDelete(props.patient.id!)} variant="solid" color="danger" size="sm" >
                                <SvgIcon size="sm" >
                                    <FaTrash />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                    )
                }
            </ButtonGroup>
        </Box>
    )
}