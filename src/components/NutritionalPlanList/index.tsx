import { FunctionComponent } from "react";
import Stack from "@mui/joy/Stack";
import { NutritionalPlanItem } from "./NutritionalPlanItem";

export const NutritionalPlanList: FunctionComponent = (): JSX.Element => {
    return (
        <Stack direction="column" spacing={2}>
            <NutritionalPlanItem />
            <NutritionalPlanItem />
            <NutritionalPlanItem />
            <NutritionalPlanItem />
        </Stack>
    )
}