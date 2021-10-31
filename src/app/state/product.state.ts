export enum productActionsTypes {
    GET_ALL_PRODUCTS = "ALL",
    GET_SELECTED_PRODUCTS = "SELECTED",
    GET_AVAILABLE_PRODUCTS = "AVAILABLE",
    SEARCH_PRODUCTS = "SEARCH",
    NEW_PRODUCT = "NEW",
    SELECT_PRODUCT = "SELECT",
    UPDATE_PRODUCT = "UPDATE",
    DELETE_PRODUCT = "DELETE",

}

export interface ActionEvent {
    type: productActionsTypes;
    payload?: any;
}
export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
    dataState?: DataStateEnum,
    data?: T,
    errorMessage?: string

}