export interface ticketGenereteResponse {
    Resposta: string,
    Sucesso: boolean,
    Numeracao: number | null
}

export interface currentTicketResponse {
    Resposta: string,
    Ativo: boolean,
    CodigoTicket: number | null,
    EmissaoTimeStamp: string | null,
    Sucesso: boolean
}

export interface allTicketResponse {
    Resposta: string,
    Tickets: allTicket[],
    Sucesso: boolean
}

export interface allTicket {
    CodigoTicket: number,
    EmissaoTimeStamp: string,
    Ativo: string,
    DataPagamento: string,
    ValorTicket: number
}

export interface ticketVerificationResponse {
    Resposta: string,
    CodigoTicket: number | null,
    Estadia: number | null,
    Sucesso: boolean
}

export interface ticketVerification {
    CodigoTicket: number | null
}

export interface ticketPaymentResponse {
    Resposta: string,
    Sucesso: boolean
}

export interface ticketPayment {
    IdCard: number | null,
    CodigoTicket: number,
    FormaPagamento: string
}

