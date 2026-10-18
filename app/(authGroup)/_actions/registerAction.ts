"use server"

type RegisterActionState = {
    name: string;
    email: string;
    password: string;
    role: string;
}
export const registerAction = async (prevState: RegisterActionState, formData: FormData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password, role })
    });

    const result = await res.json();

    return result;
}