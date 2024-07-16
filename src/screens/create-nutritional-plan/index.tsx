import { FunctionComponent } from "react";
import {
    Box,
    Typography,
    Input,
    Textarea,
    Button,
    Divider,
    Stack
} from "@mui/joy";
import { WeeklyPlanModal } from "../../components/WeeklyPlanModal";
import { useCreateNutritionalPlan } from "./hook";
import { WeekCard } from "../../components/WeeklyPlanModal/WeekCard";

export const CreateNutriotionalPlan: FunctionComponent = (): JSX.Element => {
    const { 
        weeks,
        openWeeklyPlanModal, 
        onToggleOpenWeeklyPlanModal, 
        onSave 
    } = useCreateNutritionalPlan();

    return (
        <Box mt={2}>
            <Typography level="h1" >
                Crear Plan Nutricional
            </Typography>
            <Box mt={4} >
                <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                        <Typography level="title-sm">
                            Informacion del plan
                        </Typography>
                        <Typography level="body-sm">
                            Ingrese la informacion del plan
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Button variant="soft"  >Cancelar</Button>
                        <Button>Guardar</Button>
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Titulo
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Input placeholder="nombre" />
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Descripcion
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Textarea sx={{ width: 320, height: 120, fontSize: 14 }} size="lg" placeholder="agrege una descripcion..." />
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} >
                    <Typography level="title-md">
                        Plan Semanal
                    </Typography>
                    <Stack my={2} direction="column" gap={2} >
                        {
                            weeks.map((week, index) => {
                                return (
                                    <WeekCard title={`Semana ${index + 1}`} />
                                )
                            })
                        }
                    </Stack>
                    <Box marginTop={2}>
                        <Button
                            variant="outlined"
                            size="sm"
                            onClick={onToggleOpenWeeklyPlanModal}
                        >
                            Agregar Semana
                        </Button>
                    </Box>
                </Box>
            </Box>
            <WeeklyPlanModal 
                open={openWeeklyPlanModal}
                onSave={(week) => onSave(week)}
                onClose={onToggleOpenWeeklyPlanModal}
            />
        </Box>
    )
}