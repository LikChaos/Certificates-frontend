import * as React from "react";
import "../styles/app.css";
import {push, RouterAction} from "react-router-redux";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import CertificateDetail from "../component/CertificateDetail";
import {Certificate} from "../model/Certificate";
import {loadCertificate, saveCertificateAction} from "../action/HomePageActions";
import {URL_renderPDF} from "../constants/Network";
import {Country} from "../model/Country";
import {Party} from "../model/Party";


class Detail extends React.Component<IDetailProps, {}> {
    constructor(props: IDetailProps) {
        super(props);
        this.props.LoadCertificate(this.props.match.params.id);
        this.state = {item: this.props.item};
    }

    render() {

        return (
            <div>
                <h1>Detail</h1>
                <button onClick={() => window.open(URL_renderPDF + this.props.item.id)}>Печать</button>
                <button onClick={() => this.props.backAction()}>Домой</button>
                <hr/>
                <CertificateDetail
                    item={this.props.item}
                    countries={this.props.countries}
                    parties={this.props.parties}
                    save={this.props.SaveCertificate}
                />
            </div>
        );
    }
}

interface IDetailProps {
    item: Certificate,
    match: { params: { id: number } },
    countries: Country[],
    parties: Party[],

    backAction(): RouterAction,

    OpenPDF: () => void;
    LoadCertificate: typeof loadCertificate,
    SaveCertificate: typeof saveCertificateAction,
}

function mapStateToProps(state: any) {
    return {
        item: state.home.itemDetail,
        parties: state.home.parties,
        countries: state.home.countries,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        backAction: bindActionCreators(() => push('/'), dispatch),
        LoadCertificate: bindActionCreators(loadCertificate, dispatch),
        SaveCertificate: bindActionCreators(saveCertificateAction, dispatch),
    }
}

export default connect<{}, {}, IDetailProps>(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
