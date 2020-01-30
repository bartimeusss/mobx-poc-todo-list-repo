export interface IFetch {
    performRequest<TRequest, TResponse>(url: string, body?: TRequest): Promise<TResponse>
}
