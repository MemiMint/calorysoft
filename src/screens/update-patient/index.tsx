import { FunctionComponent } from "react";
import { Box, Typography, Button, Input, Divider, SvgIcon, Select, Option, Textarea } from "@mui/joy";
import { FaAt } from "react-icons/fa6";
import { useCreatePatient } from "./hook";
import { ResponseAlert } from "../../components/alerts";
import { useParams } from "react-router-dom";

const phonePrefixes: string[] = ["0412", "0414", "0416", "0424", "0426", "0212"];

export const UpdatePatient: FunctionComponent = (): JSX.Element => {
    const { id } = useParams()
    const { state, alertState, onChange, onChangeSelect, onClick, onCloseAlert } = useCreatePatient(id!);

    console.log(id);

    return (
        <Box mt={2}>
            <Typography level="h1" >
                Editar Paciente
            </Typography>
            <Typography level="title-md" >
                Llena el formulario de abajo para editar el paciente
            </Typography>
            <Box mt={4} >
                <Box py={2} display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                        <Typography level="title-sm">
                            Informacion Personal
                        </Typography>
                        <Typography level="body-sm">
                            Ingrese la informacion del paciente
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Button variant="soft">Cancelar</Button>
                        <Button onClick={onClick} >Guardar</Button>
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Nombre del paciente
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
                            Edad del paciente
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Input name="age" value={state.age} onChange={onChange} type="number" placeholder="edad" />
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Altura del paciente
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Input name="height" value={state.height} onChange={onChange} type="number" placeholder="altura" />
                        <Typography level="title-sm">
                            CM
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Peso del paciente
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Input name="weight" value={state.weight} onChange={onChange} type="number" placeholder="peso" />
                        <Typography level="title-sm">
                            KG
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Sexo del paciente
                        </Typography>
                    </Box>
                    <Box sx={{ width: 200 }} display="flex" alignItems="center" gap={2} >
                        <Select name="sex" value={state.sex} onChange={(event, value) => onChangeSelect(event!, "sex", value!)} sx={{ width: "100%" }} >
                            <Option value={"M"} >Hombre</Option>
                            <Option value={"F"}>Mujer</Option>
                        </Select>
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Actividad Fisica
                        </Typography>
                    </Box>
                    <Box sx={{ width: 200 }} display="flex" alignItems="center" gap={2} >
                        <Select name="physical_activity" value={state.physical_activity} onChange={(event, value) => onChangeSelect(event!, "physical_activity", String(value!))} sx={{ width: "100%" }} >
                            <Option value={1.2} >Muy ligera</Option>
                            <Option value={1.375}>Ligera</Option>
                            <Option value={1.55}>Moderada</Option>
                            <Option value={1.725}>Activa</Option>
                            <Option value={1.9} >Muy activa</Option>
                        </Select>
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Plan nutricional
                        </Typography>
                    </Box>
                    <Box sx={{ width: 200 }} display="flex" alignItems="center" gap={2} >
                        <Select name="np_id" value={state.np_id} onChange={(event, value) => onChangeSelect(event!, "np_id", String(value!))} sx={{ width: "100%" }} >
                            <Option value="1" >Plan 1</Option>
                            <Option value="2" >Plan 2</Option>
                            <Option value="3">Plan 3</Option>
                        </Select>
                    </Box>
                </Box>
                <Divider />
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Correo electronico
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Input
                            name="email"
                            onChange={onChange}
                            startDecorator={(
                                <SvgIcon size="sm" >
                                    <FaAt />
                                </SvgIcon>
                            )}
                            placeholder="john@doe.com" />
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
                                    <Select name="phonePredix" value={state.phonePrefix} onChange={(event, value) => onChangeSelect(event!, "phonePrefix", value!)} sx={{ ml: -1.5 }}>
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
                <Box mt={4} py={2} display="flex" alignItems="center" gap={4}>
                    <Box>
                        <Typography level="title-sm">
                            Notas adicionales
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} >
                        <Textarea name="notes" value={state.notes} onChange={onChange} placeholder="" minRows={2} size="lg" />
                    </Box>
                </Box>
                <Divider />
            </Box>
            { alertState && (
                <ResponseAlert 
                    open={alertState.open}
                    title={alertState.title}
                    type={alertState.type as any}
                    onClose={onCloseAlert}
                />
            ) }
        </Box>
    )
}