import {
    ChangePageNumber, GET_CERTIFICATE_FOR_DETAIL,
    GET_CERTIFICATES,
    GET_CERTIFICATES_PAGE_COUNT, GET_COUNTRIES, GET_PARTIES,
} from "../constants/Actions";
import {initialState} from "./index";
import {ItemsPerPageCount} from "../constants/Values";

export function homeReducer(state = initialState, action: any) {
    switch (action.type) {
        case ChangePageNumber:
            return {...state, page: action.payload};
        case GET_CERTIFICATES:
            return {...state, items: action.payload};
        case GET_CERTIFICATES_PAGE_COUNT:
            let number = Math.ceil(action.payload / ItemsPerPageCount);
            return {...state, maxPageNumber: number};
        case GET_CERTIFICATE_FOR_DETAIL:
            return {...state, itemDetail: action.payload};

        case GET_COUNTRIES:
            return {...state, countries: action.payload};
        case GET_PARTIES:
            return {...state, parties: action.payload};

        default:
            return state;
    }
}