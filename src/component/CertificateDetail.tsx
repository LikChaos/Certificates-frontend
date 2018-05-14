import * as React from "react";
import "../styles/app.css";
import {Certificate} from "../model/Certificate";
import {URL_renderPDF} from "../constants/Network";
import Select from "react-select";
import 'react-select/dist/react-select.css';
import {Country} from "../model/Country";
import {Party} from "../model/Party";
import {saveCertificateAction} from "../action/HomePageActions";

const CodeField = "Code";

class Options {
    value: number;
    label: string;

    constructor(value: number, label: string) {
        this.value = value;
        this.label = label;
    }

    //конвертеры
    static itemsToOptions(items: { id: number }[], list: { id: number, name: string }[]): Options[] {
        let ans: Options[];
        ans = items.map((e: { id: number }) => {
            let a = list.filter((x: { id: number }) => x.id == e.id)[0];
            if (a == undefined) {//совпадений нет-возникает пока данные не прогрузились на страницу
                a = {id: 0, name: ""};
            }
            return new Options(e.id, a.name);
        });
        return ans;
    }

    static optionsToItems(options: Options[], list: { id: number, name: string }[]): any[] {
        let ans: any[];
        ans = options.map((e: Options) => {
            let a = list.filter((x: { id: number }) => x.id == e.value)[0];
            if (a == undefined) {
                a = {id: 0, name: ""};
            }
            return {id: e.value, name: a.name};
        });
        return ans;
    }
}

export default class CertificateDetail extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props, {item: new Certificate()});
        this.onFieldChange = this.onFieldChange.bind(this);
        this.reset = this.reset.bind(this);
        let countriesAsOptions = this.initCountriesOptions(props.countries);
        let partiesAsOptions = this.initPartiesOptions(props.parties);
        this.state = {
            item: new Certificate(),
            countriesOptions: countriesAsOptions,
            partiesOptions: partiesAsOptions,
        };
    }

    initCountriesOptions(c: Country[]): Options[] {
        let countriesAsOptions: Options[] = [];
        c.forEach(
            (x: Country) => countriesAsOptions.push(new Options(x.id, x.name))
        );
        return countriesAsOptions;
    }

    initPartiesOptions(c: Party[]): Options[] {
        let countriesAsOptions: Options[] = [];
        c.forEach(
            (x: Party) => countriesAsOptions.push(new Options(x.id, x.name))
        );
        return countriesAsOptions;
    }

    reset() {
        let propsCopy = JSON.parse(JSON.stringify(this.props.item));
        this.setState({item: propsCopy});
    }

    onFieldChange(e: any) {
        let next = this.state;
        switch (e.target.name) {
            case CodeField: {
                next.item.code = e.target.value;
                break;
            }
        }
        this.setState(next);
    };

    componentWillReceiveProps(nextProps: IProps) {
        let certificate = nextProps.item;
        this.setState({item: certificate});

        let countriesAsOptions = this.initCountriesOptions(nextProps.countries);
        this.setState({countriesOptions: countriesAsOptions,});

        let partiesAsOptions = this.initPartiesOptions(nextProps.parties);
        this.setState({partiesOptions: partiesAsOptions,});
    }

    render() {
        return (
            <div>
                <label>Сертификат ID: {this.state.item.id}</label>
                <div>
                    <label>Сертификат Code:</label>
                    <input type="number"
                           name={CodeField}
                           value={this.state.item.code}
                           onChange={this.onFieldChange}
                    />
                </div>
                <div>
                    <h3>Страна импортер</h3>
                    <Select
                        value={this.state.item.importingCountry.id}
                        placeholder="Chose a country"
                        options={this.state.countriesOptions}
                        onChange={(options: Options) => {
                            let i = this.state.item;
                            i.importingCountry = this.props.countries.filter((x: Country) => x.id == options.value)[0];
                            this.setState({item: i});
                        }}
                    />
                </div>
                <div>
                    <h3>Компания импортер</h3>
                    <Select
                        value={this.state.item.importingCompany.id}
                        placeholder="Chose a company"
                        options={this.state.partiesOptions}
                        onChange={(options: Options) => {
                            let i = this.state.item;
                            i.importingCompany = this.props.parties.filter((x: Party) => x.id == options.value)[0];
                            this.setState({item: i});
                        }}
                    />
                </div>
                <div>
                    <h3>Страна экспортер</h3>
                    <Select
                        value={this.state.item.exportingCountry.id}
                        placeholder="Chose a country"
                        options={this.state.countriesOptions}
                        onChange={(options: Options) => {
                            let i = this.state.item;
                            i.exportingCountry = this.props.countries.filter((x: Country) => x.id == options.value)[0];
                            this.setState({item: i});
                        }}
                    />
                </div>
                <div>
                    <h3>Компания экспортер</h3>
                    <Select
                        value={this.state.item.exportingCompany.id}
                        placeholder="Chose a company"
                        options={this.state.partiesOptions}
                        onChange={(options: Options) => {
                            let i = this.state.item;
                            i.exportingCompany = this.props.parties.filter((x: Party) => x.id == options.value)[0];
                            this.setState({item: i});
                        }}
                    />
                </div>
                <div>
                    <h3>Транзитные страны</h3>
                    <Select
                        multi={true}
                        value={Options.itemsToOptions(this.state.item.transitCountries, this.props.countries)}
                        placeholder="Chose a country"
                        options={this.state.countriesOptions}
                        onChange={(options: Options[]) => {
                            let i = this.state.item;
                            i.transitCountries = Options.optionsToItems(options, this.props.countries);
                            this.setState({item: i});
                        }}
                    />
                </div>

                <div/>
                <hr/>
                <button onClick={this.reset}>Восстановить значения</button>
                <button onClick={
                    () => {
                        this.props.save(this.state.item);
                    }
                }>Сохранить
                </button>
                <button onClick={() => window.open(URL_renderPDF + this.props.item.id)}>PDF</button>
            </div>
        );
    };
}

interface IState {
    countriesOptions: any[],
    partiesOptions: any[],
    item: Certificate,
}

interface IProps {
    item: Certificate,
    parties: Party[],
    countries: Country[],

    save: typeof saveCertificateAction,
}
