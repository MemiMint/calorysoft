import { FunctionComponent } from "react";
import { Typography, Box, Input, SvgIcon, Button, Stack } from "@mui/joy";
import { FaUser, FaIdCard, FaMagnifyingGlass } from "react-icons/fa6";
import { useViewAssistants } from "./hook";
import { AssistantList } from "../../components/AssistantList";

export const ViewAsistants: FunctionComponent = (): JSX.Element => {
    const { assistants, onDelete } = useViewAssistants();

    return (
        <>
            <Typography level="h1" >Ver Asistentes</Typography>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={4}
                p={2}
                bgcolor="white"
                borderRadius={4}
                boxShadow="md"
            >
                <Box display="flex" alignItems="center" gap={1}>
                    <Input
                        size="sm"
                        placeholder="nombre"
                        startDecorator={
                            <SvgIcon size="sm" >
                                <FaUser />
                            </SvgIcon>
                        }
                    />
                    <Input
                        size="sm"
                        placeholder="cedula de identidad"
                        startDecorator={
                            <SvgIcon size="sm" >
                                <FaIdCard />
                            </SvgIcon>
                        }
                    />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Button size="sm" startDecorator={<SvgIcon><FaMagnifyingGlass /></SvgIcon>} variant="soft" >Buscar</Button>
                </Box>
            </Box>
            <Box mt={4}>
                <Stack spacing={4}>
                    <AssistantList onDelete={onDelete} assistants={assistants} />
                </Stack>
            </Box>
        </>
    )
}

/*
    nutritional plan {
        weekPlans: [
            {
                monday: {
                    breakfast: "arepas",
                    lunch: "pasta",
                    snack?: "galletas"
                    dinner: "sandwich"
                },
                tuesday: {
                    breakfast: "cereal",
                    lunch: "pescado",
                    snack?: "torta"
                    dinner : "ensalada"
                },
                wednesday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta"
                    dinner : "ensalada"
                },
                thursday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta",
                    dinner : "ensalada"
                },
                friday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta",
                    dinner : "ensalada"
                },
                saturday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta",
                    dinner : "ensalada"
                },
                sunday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta",
                    dinner : "ensalada"
                }
            }
        ]
    }
*/