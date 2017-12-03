class Utility {
    constructor() {}
    
    validate(fields, fieldValues) {
        let errors = {};
        let isValid = true;

        const regDecimal = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/;
        
        fields.forEach(element => {
            let val = fieldValues[element.field] ? fieldValues[element.field] : '';
            let flag = false;
            let message = '';
            
            if (!val) {
                if (element.required) {
                    flag = true;
                    message = 'The field is required.';
                }

            } else if (element.type == 'decimal' && !regDecimal.test(val)) {
                flag = true;
                message = 'The value is not valid.'
            }
        
            if (flag) {
                errors = Object.assign(errors, { [element.field] : {status: 'error', message: message} } );
                isValid = false;
            }
        });

        if (isValid === true) return true;
        else return errors;
    }

    convertToMetric(metric) {
        const {weight, height} = metric;
        const kg = weight * 0.45;
        const m = height * 0.025;

        return {weight: kg, height: m};
    }
}

export default new Utility();