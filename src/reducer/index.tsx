import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {homeReducer as home} from './reducers'
import {Country} from "../model/Country";
import {Certificate} from "../model/Certificate";
import {Party} from "../model/Party";

export const initialState = {
    page: 1,
    maxPageNumber: 1,

    items: new Array<Certificate>(),
    countries: [new Country()],
    parties: [new Party()],
    itemDetail: new Certificate(),
};

export default combineReducers({
    routing: routerReducer,
    home,
});