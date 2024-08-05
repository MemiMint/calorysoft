import { FunctionComponent } from "react";
import {
    Modal,
    ModalDialog,
    Box,
    ModalClose,
    DialogContent,
    DialogTitle,
    Typography,
    Tabs,
    Tab,
    TabPanel,
    TabList,
    DialogActions,
    Button,
} from "@mui/joy";
import { DayForm } from "./DayForm";
import { IProps } from "./IProps";
import { useWeeklyPlanModal } from "./hook";

export const WeeklyPlanModal: FunctionComponent<IProps> = (props): JSX.Element => {

    console.log("SELECTED WEEK: ", props.selectedWeek);

    const {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        setMonday,
        setTuesday,
        setWednesday,
        setThursday,
        setFriday,
        setSaturday,
        setSunday
    } = useWeeklyPlanModal(props.selectedWeek);

    return (
        <Modal open={props.open} >
            <ModalDialog>
                <DialogTitle>
                    <Box display="flex" alignItems="center" justifyContent="space-between" >
                        <Typography>Plan Semanal</Typography>
                        <ModalClose onClick={props.onClose} />
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Tabs sx={{ marginTop: 2 }} defaultValue={0} >
                        <TabList>
                            <Tab>Lunes</Tab>
                            <Tab>Martes</Tab>
                            <Tab>Miercoles</Tab>
                            <Tab>Jueves</Tab>
                            <Tab>Viernes</Tab>
                            <Tab>Sabado</Tab>
                            <Tab>Domingo</Tab>
                        </TabList>
                        <TabPanel value={0}>
                            <DayForm 
                                state={monday}
                                onChange={(event) => setMonday((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))}
                            />
                        </TabPanel>
                        <TabPanel value={1} >
                            <DayForm
                                state={tuesday} 
                                onChange={(event) => setTuesday((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))}
                            />
                        </TabPanel>
                        <TabPanel value={2} >
                            <DayForm 
                                state={wednesday} 
                                onChange={(event) => setWednesday((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))}
                            />
                        </TabPanel>
                        <TabPanel value={3} >
                            <DayForm 
                                state={thursday} 
                                onChange={(event) => setThursday((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))}
                            />
                        </TabPanel>
                        <TabPanel value={4} >
                            <DayForm 
                                state={friday} 
                                onChange={(event) => setFriday((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))}
                            />
                        </TabPanel>
                        <TabPanel value={5} >
                            <DayForm 
                                state={saturday} 
                                onChange={(event) => setSaturday((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))}
                            />
                        </TabPanel>
                        <TabPanel value={6} >
                            <DayForm 
                                state={sunday} 
                                onChange={(event) => setSunday((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))}
                            />
                        </TabPanel>
                    </Tabs>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} variant="soft" size="sm" >
                        Cancelar
                    </Button>
                    <Button onClick={() => props.onSave({
                        monday,
                        tuesday,
                        wednesday,
                        thursday,
                        friday,
                        saturday,
                        sunday
                    })} size="sm" >
                        Guardar
                    </Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}