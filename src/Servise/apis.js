const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/payspaze-project"

export const userEndpoint = {
    USER_SIGNUP : BASE_URL + "/sign-up",
    USER_LOGIN : BASE_URL + "/sign-in"
}