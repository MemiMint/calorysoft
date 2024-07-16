import { useState } from "react";
import { Day } from "../../types/day";

export const useWeeklyPlanModal = () => {
    const [monday, setMonday] = useState<Day>({
        breakfast: "",
        lunch: "",
        dinner: "",
        snack: ""
    });

    const [tuesday, setTuesday] = useState<Day>({
        breakfast: "",
        lunch: "",
        snack: "",
        dinner: ""
    });

    const [wednesday, setWednesday] = useState<Day>({
        breakfast: "",
        lunch: "",
        snack: "",
        dinner: ""        
    });

    const [thursday, setThursday] = useState<Day>({
        breakfast: "",
        lunch: "",
        snack: "",
        dinner: ""
    });

    const [friday, setFriday] = useState<Day>({
        breakfast: "",
        lunch: "",
        snack: "",
        dinner: ""
    });

    const [saturday, setSaturday] = useState<Day>({
        breakfast: "",
        lunch: "",
        snack: "",
        dinner: ""
    });

    const [sunday, setSunday] = useState<Day>({
        breakfast: "",
        lunch: "",
        snack: "",
        dinner: ""
    });

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