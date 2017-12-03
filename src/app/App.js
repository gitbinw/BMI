import React from 'react';
import Utility from '../common/Utility';
import {BmiForm} from './components/BmiForm';
import {BmiResult} from './components/BmiResult';
import s from '../../scss/main.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                height: '',
                weight: '',
                mode: 'metric'
            },
            bmi: '',
            validStates: {}
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleFormChange(e) {
        const target = e.target;
        const fieldName = target.name;
        const data = { [fieldName]: target.type == 'checkbox' ? target.checked : target.value };

        let myFormData = Object.assign({}, this.state.formData, data);
        
        if (fieldName == 'mode') {
            myFormData = Object.assign(myFormData, {height: '', weight: ''});
            this.setState({ formData:  myFormData, validStates: {}, bmi: ''});

        } else {
            const formError = Utility.validate([{field: fieldName, required: true, type: 'decimal'}], data);
            if (formError === true) {
                let myValidates = Object.assign({}, this.state.validStates, {[fieldName]: {status: null, message: ''}});
                this.setState({ formData:  myFormData, validStates: myValidates });
            } else {
                this.setState({ formData:  myFormData });
            }
        }
    }

    calculate() {
        const validFields = [
            {field: 'height', required: true, type: 'decimal'},
            {field: 'weight', required: true, type: 'decimal'}
        ];

        let metricData = Object.assign({}, this.state.formData);
        const formError = Utility.validate(validFields, metricData);
        
        if (formError === true) {
            if (metricData.mode == 'imperial') {
                metricData = Utility.convertToMetric(metricData);
            }

            const bmi = (metricData.weight / Math.pow(metricData.height, 2)).toFixed(2);
            
            this.setState({bmi: bmi});

        }
    }

    render() {
        return (
            <div>
                <BmiForm onChange={this.handleFormChange} onSubmit={this.calculate} {...this.state.formData} />
                <BmiResult bmi={this.state.bmi} />
            </div>
        );
    }
}