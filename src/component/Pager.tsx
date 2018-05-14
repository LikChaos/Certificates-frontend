import * as React from "react";
import "../styles/app.css";

export default class Pager extends React.Component<IPagerProps> {
    render() {
        return (
            <div>
                <p>
                    <button onClick={this.props.PreviousPage}>Предыдущая</button>
                    <label>{this.props.page}</label>
                    <button onClick={() => {
                        if (this.props.page >= this.props.maxPageNumber) {
                            return;
                        } else {
                            return this.props.NextPage();
                        }
                    }}>Следующая
                    </button>
                </p>
            </div>
        );
    };
}

interface IPagerProps {
    page: number,
    maxPageNumber: number,

    PreviousPage(): void,

    NextPage(): void,
}
