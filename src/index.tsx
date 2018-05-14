import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store, {history} from './store'
import App from './app'
import {ItemsPerPageCount} from "./constants/Values";
import {GET_CERTIFICATES_PAGE_COUNT, GET_CERTIFICATES, GET_COUNTRIES, GET_PARTIES} from "./constants/Actions";
import {
    getCertificates,
    callServerForCertificatesCount,
    callServerForCountries,
    callServerForParties
} from "./action/Network";

const target = document.querySelector("#root");

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);

getCertificates(1, ItemsPerPageCount, (data: string) => {
    let listItems = JSON.parse(data);
    store.dispatch({
        type: GET_CERTIFICATES,
        payload: listItems
    });
});

callServerForCertificatesCount((data: string) => {
    let pageCount = JSON.parse(data);
    store.dispatch({
        type: GET_CERTIFICATES_PAGE_COUNT,
        payload: pageCount.count,
    });
});

callServerForCountries((data: string) => {
    let countries = JSON.parse(data);
    store.dispatch({
        type: GET_COUNTRIES,
        payload: countries,
    });
});

callServerForParties((data: string) => {
    let parties = JSON.parse(data);
    store.dispatch({
        type: GET_PARTIES,
        payload: parties,
    });
});

