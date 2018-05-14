import * as React from "react";
import * as ReactDataGrid from "react-data-grid";
import {Column} from "react-data-grid";
import "../styles/app.css";
import "../styles/grid-style.css";
import {Certificate} from "../model/Certificate";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonFormatter from "../Formatters/ButtonFormatter";


export default class ItemList extends React.Component<IItemListProps, IItemListState> {
    private _columns: Column[];

    constructor(props: IItemListProps) {
        super(props);
        this._columns = [];
        this._columns.push({key: Certificate.CodeName, name: Certificate.CodeName, filterable: true});
        this._columns.push({
            key: "button",
            name: "команды",
            //специфичная кнопка
            formatter: ButtonFormatter,
            getRowMetaData: (row) => {
                return {row: row, click: this.props.detailPage}
            },
            filterable:false,
        });
    }


    render() {
        //TODO: решить лучше без скролинга (так как сейчас) или же со скроллом
        let rowHeight = 50;
        let minHeight = (this.props.items.length + 1) * rowHeight + 2;
        return (
            <div>
                <ReactDataGrid
                    rowHeight={rowHeight}
                    minHeight={minHeight}
                    columns={this._columns}
                    rowGetter={i => this.props.items[i]}
                    rowsCount={this.props.items.length}
                />
            </div>
        );
    }
}

interface IItemListState {
    filters:any,
}

interface IItemListProps {
    items: Certificate[],

    detailPage(id: number): void,

    //открывать и редактировать элементы
    //PreviousPage(): any,
}
