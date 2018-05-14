import * as React from "react";

export default class ButtonFormatter extends React.Component<IFormatterProps> {
    onClick() {
        this.props.dependentValues.click(this.props.dependentValues.row.id);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onClick()}>Подробно</button>
            </div>);
    }
}

interface IFormatterProps {
    dependentValues: {
        row: { id: number },
        click(Id: number): void,
    },
}
