import { FunctionComponent } from "react";
import Stack from "@mui/joy/Stack";
import { NutritionalPlanItem } from "./NutritionalPlanItem";
import { NutritionalPlan } from "../../types/nutritional-plan";

export const NutritionalPlanList: FunctionComponent<{ nutritionalPlans: NutritionalPlan[], onDelete: (id: number) => void; }> = (props): JSX.Element => {
    return (
        <Stack direction="column" spacing={2}>
            {
                props.nutritionalPlans.map((np) => {
                    return (
                        <NutritionalPlanItem 
                            onDelete={props.onDelete}
                            id={np.id}
                            title={np.title}
                        />
                    )
                })
            }
        </Stack>
    )
}