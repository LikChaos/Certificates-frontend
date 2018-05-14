import {
    ChangePageNumber, GET_CERTIFICATE_FOR_DETAIL,
    GET_CERTIFICATES
} from "../constants/Actions";
import {callServerForCertificateById, getCertificates} from "./Network";
import {ItemsPerPageCount} from "../constants/Values";
import {Certificate} from "../model/Certificate";
import {updateCertificate}from "./Network"

export function loadCertificate(CertificateNumber: number) {
    return (dispatch: any) => {
        let foo = (data: string) => {
            let item = JSON.parse(data);
            dispatch({
                type: GET_CERTIFICATE_FOR_DETAIL,
                payload: item
            });
        };
        callServerForCertificateById(CertificateNumber, foo);
    }
}

export function saveCertificateAction(certificate: Certificate) {
    return (dispatch: any) => {
        if(certificate.id==0){

        }else {
            let foo = (data: string) => {
                console.log(data);
                // let item = JSON.parse(data);
                // dispatch({
                //     type: GET_CERTIFICATE_FOR_DETAIL,
                //     payload: item
                // });
            };
            updateCertificate(certificate,foo);
        }
    }
}

export function callPage(PageNumber: number) {
    return (dispatch: any) => {
        if (PageNumber <= 0) return;
        dispatch({
            type: ChangePageNumber,
            payload: PageNumber
        });
        let foo = (data: string) => {
            let listItems = JSON.parse(data);
            dispatch({
                type: GET_CERTIFICATES,
                payload: listItems
            });
        };
        getCertificates(PageNumber, ItemsPerPageCount, foo);
    }
}
