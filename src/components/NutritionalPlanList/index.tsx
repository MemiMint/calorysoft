import { FunctionComponent } from "react";
import Stack from "@mui/joy/Stack";
import { NutritionalPlanItem } from "./NutritionalPlanItem";
import { NutritionalPlan } from "../../types/nutritional-plan";

export const NutritionalPlanList: FunctionComponent<{ nutritionalPlans: NutritionalPlan[] }> = (props): JSX.Element => {
    return (
        <Stack direction="column" spacing={2}>
            {
                props.nutritionalPlans.map((np) => {
                    return (
                        <NutritionalPlanItem 
                            id={np.id}
                            title={np.title}
                        />
                    )
                })
            }
        </Stack>
    )
}