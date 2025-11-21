export interface userRegistration {
    Nome: string;
    Tipo: string;
    Status: string;
    Email: string;
    Senha: string;
    Matricula: string;
}

export interface userRegistrationResponse {
    Responta: String,
    Id: number
}

export interface userLogin {
    Matricula: String,
    Senha: String
}

export interface userLoginResponse {
    Resposta: string;
    Liberacao: boolean;
    Id: number;
}
