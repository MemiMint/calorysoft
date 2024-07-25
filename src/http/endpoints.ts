type Auth = {
    login: string;
    signup: string;
    me: string;
}

type Patient = {
    patients: string;
    create: string;
    update: string;
    delete: string;
}

type Admin = {
    exists: string;
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
    patients: "/patients",
    create: "/patients/create",
    update: "/patients/update",
    delete: "/patients/delete"
}

export {
    admin,
    auth,
    patient
}