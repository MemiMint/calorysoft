type Auth = {
    login: string;
    signup: string;
    me: string;
}

type Patient = {
    patient: string;
    patients: string;
    create: string;
    update: string;
    delete: string;
}

type Admin = {
    exists: string;
}

type Assistant = {
    assistants: string;
    create: string;
    update: string;
    asistant: string;
    delete: string;
}

type NutritionalPlan = {
    nutritionalPlans: string;
    nutritionalPlan: string;
    create: string;
    delete: string;
    update: string;
}

const auth: Auth = {
    login: "/login",
    signup: "/signup",
    me: "/me"
}

const admin: Admin = {
    exists: "/admin/exists"
}

const patient: Patient = {
    patient: "/patient",
    patients: "/patients",
    create: "/patients/create",
    update: "/patient/",
    delete: "/patients/delete"
}

const assistant: Assistant = {
    assistants: "/assistants",
    asistant: "/assistant",
    create: "/assistant/create",
    update: "/assistant/update",
    delete: "/assistant/",
}

const nutritionalPlan: NutritionalPlan = {
    nutritionalPlan: "/nutritional_plan",
    nutritionalPlans: "/nutritional_plans",
    create: "/nutritional_plan/create",
    update: "/nutritional_plan/update",
    delete: "/nutritional_plan/delete",
};

export {
    admin,
    auth,
    patient,
    assistant,
    nutritionalPlan
}