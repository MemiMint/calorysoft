import { FunctionComponent } from "react";
import { Box, Typography, Button, Input, Divider, Select, Option } from "@mui/joy";
import { useUpdateAsistant } from "./hook";
import { ResponseAlert } from "../../components/alerts";
import { useParams } from "react-router-dom";

const phonePrefixes: string[] = ["0412", "0414", "0416", "0424", "0426", "0212"];

export const UpdateAssistant: FunctionComponent = (): JSX.Element => {
    const { id } = useParams();

    const { onChange, onChangeSelect, onClick, state, alertState, onClose } = useUpdateAsistant(id!);

    return (
        <Box mt={2}>
            <Typography level="h1" >
                Editar Asistente
            </Typography>
            <Typography level="title-md" >
                Llena el formulario de abajo para editar un paciente
            </Typography>
            <Box mt={4} >
                <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                        <Typography level="title-sm">
                            Informacion Personal
                        </Typography>
                        <Typography level="body-sm">
                            Ingrese la informacion del asistente
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Button variant="soft"  >Cancelar</Button>
                        <Button onClick={onClick}>Guardar</Button>
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Nombre del asistente
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Input name="firstname" value={state.firstname} onChange={onChange} placeholder="nombre" />
                        <Input name="lastname" value={state.lastname} onChange={onChange} placeholder="apellido" />
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            cedula de identidad
                        </Typography>
                    </Box>
                    <Box sx={{ width: 200 }} display="flex" alignItems="center" gap={2} >
                        <Input name="cid" value={state.cid} onChange={onChange} placeholder="cedula" />
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            nombre de usuario
                        </Typography>
                    </Box>
                    <Box sx={{ width: 200 }} display="flex" alignItems="center" gap={2} >
                        <Input name="username" value={state.username} onChange={onChange} placeholder="nombre de usuario" />
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Numero de telefono
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Input
                            name="phonenumber"
                            value={state.phonenumber}
                            onChange={onChange}
                            startDecorator={(
                                <>
                                    <Select name="phonePrefix" value={state.phonePrefix} onChange={(event, value) => onChangeSelect(event!, value!)} sx={{ ml: -1.5 }}>
                                        {phonePrefixes.map((prefix, index) => {
                                            return (
                                                <Option value={prefix} key={index}>
                                                    {prefix}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </>
                            )}
                            placeholder="999-999-999"
                        />
                    </Box>
                </Box>
                <Divider />
            </Box>
            <ResponseAlert 
                open={alertState.open}
                title={alertState.title}
                type={alertState.type as any}
                onClose={onClose}
            />
        </Box>
    )
}