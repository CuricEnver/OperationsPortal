import apiClient from "../../../api/apiClient";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    expiresAt: string;
}

export const login = async (
    request: LoginRequest,
): Promise<LoginResponse> => {

    const response = await apiClient.post<LoginResponse>(
        "/auth/login",
        request,
    );

    return response.data;
};