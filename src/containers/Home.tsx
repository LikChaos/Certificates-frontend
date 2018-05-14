import * as React from "react";
import "../styles/app.css";
import {callPage} from "../action/HomePageActions"
import {push, RouterAction} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Pager from "../component/Pager";
import {Action} from "history";
import {Certificate} from "../model/Certificate";
import ItemList from "../component/ItemList";


class Home extends React.Component<IHomeProps> {
    constructor(props: IHomeProps) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.navToAdd = this.navToAdd.bind(this);
    };

    nextPage() {
        this.props.ChangeCurrentPage(this.props.page + 1);
    }

    previousPage = function () {
        this.props.ChangeCurrentPage(this.props.page - 1);
    };

    navToAdd = function () {
        this.props.NavigateToAddCertificate();
    };

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Pager page={this.props.page}
                       NextPage={this.nextPage}
                       PreviousPage={this.previousPage}
                       maxPageNumber={this.props.maxPageNumber}/>
                <div>
                    <button onClick={this.navToAdd}>Добавить</button>
                </div>
                <ItemList items={this.props.items}
                          detailPage={this.props.CallDetailPage}/>
            </div>
        );
    }
}

interface IHomeProps {
    page: number,
    items: Certificate[],
    maxPageNumber: number,
    CallDetailPage: (id: number) => void,
    ChangeCurrentPage: typeof callPage,
    NavigateToAddCertificate: () => void,
}

function mapStateToProps(state: any) {
    return {
        page: state.home.page,
        items: state.home.items,
        maxPageNumber: state.home.maxPageNumber,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        CallDetailPage: bindActionCreators((id: number) => push('/' + id), dispatch),
        ChangeCurrentPage: bindActionCreators(callPage, dispatch),
        NavigateToAddCertificate: bindActionCreators(() => push('/new'), dispatch),
    }
}

export default connect<{}, {}, IHomeProps>(
    mapStateToProps,
    mapDispatchToProps
)(Home);
