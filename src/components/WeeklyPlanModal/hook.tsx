import { useState } from "react";
import { Day } from "../../types/day";
import { Week } from "../../types/week";

const MONDAY: Day = {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: ""    
}

const TUESDAY: Day = {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: ""
}

const WEDNESDAY: Day = {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: ""
}

const THURSDAY: Day = {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: ""
}

const FRIDAY: Day = {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: ""
}

const SATURDAY: Day = {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: ""
}

const SUNDAY: Day = {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: ""
}

export const useWeeklyPlanModal = (week?: Week | null) => {
    const [monday, setMonday] = useState<Day>(week ? week.monday : MONDAY);

    const [tuesday, setTuesday] = useState<Day>(week ? week.tuesday : TUESDAY);

    const [wednesday, setWednesday] = useState<Day>(week ? week.wednesday : WEDNESDAY)

    const [thursday, setThursday] = useState<Day>(week ? week.thursday : THURSDAY);

    const [friday, setFriday] = useState<Day>(week ? week.friday : FRIDAY);

    const [saturday, setSaturday] = useState<Day>(week ? week.saturday : SATURDAY);

    const [sunday, setSunday] = useState<Day>(week ? week.sunday : SUNDAY);

    return {
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
    }
}