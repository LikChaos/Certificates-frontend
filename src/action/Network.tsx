import * as http from "http";
import {
    port, host, URL_ItemsCount,
    URL_Country, URL_Party, URL_Certificates, URL_page, URL_limit,
} from "../constants/Network";
import {Certificate} from "../model/Certificate";

export function getCertificates(page: number, itemsCount: number, callback: Function) {
    let options = {
        host: host,
        port: port,
        path: URL_Certificates + "?" + URL_page + page + "&" + URL_limit + itemsCount,
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };
    let req = http.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk: string) {
            callback(chunk);
        });
    });
    req.end();
}

export function updateCertificate(certificate: Certificate, callback: Function) {
    let data = JSON.stringify(certificate);
    let options = {
        host: host,
        port: port,
        path: URL_Certificates + "/" + certificate.id,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(data),
        }
    };
    let req = http.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk: string) {
            callback(chunk);
        });
    });
    req.write(data);
    req.end();
}


export function callServerForCertificateById(Id: number, callback: Function) {
    let options = {
        host: host,
        port: port,
        path: URL_Certificates + "/" + Id,
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };
    let req = http.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk: string) {
            callback(chunk);
        });
    });
    req.end();
}

export function callServerForCertificatesCount(callback: Function) {
    let options = {
        host: host,
        port: port,
        path: URL_Certificates + URL_ItemsCount,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };
    let req = http.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk: string) {
            callback(chunk);
        });
    });
    //req.write();
    req.end();
}

export function callServerForCountries(callback: Function) {
    let options = {
        host: host,
        port: port,
        path: URL_Country,
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            //"Content-Length": Buffer.byteLength(data)
        }
    };
    let req = http.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk: string) {
            callback(chunk);
        });
    });
    req.end();
}

export function callServerForParties(callback: Function) {
    let options = {
        host: host,
        port: port,
        path: URL_Party,
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };
    let req = http.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk: string) {
            callback(chunk);
        });
    });
    req.end();
}