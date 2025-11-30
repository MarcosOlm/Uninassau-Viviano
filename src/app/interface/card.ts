export interface card {
    Cartoes: [
        Id: number,
        Saldo: number,
        NumeroCard: number,
        Tipo: string
    ]
}

export interface cardById {
    Saldo: number,
    NumeroCard: number,
    Tipo: string
}

export interface creatCard {
    IdUsuario: number | null,
    Tipo: string,
    ValorInicial: number
}

export interface addBalanceCard {
    IdCard: number,
    Valor: number
}

export interface historyCardResponse {
    Resposta: string,
    Sucesso: boolean,
    Registro: historyCard[]
}

export interface historyCard {
    Tipo: string,
    Valor: number,
    HoraRegistro: string,
    DataRegistro: string
}
