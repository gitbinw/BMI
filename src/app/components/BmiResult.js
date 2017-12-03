import React from 'react';

export const BmiResult = props => {
    let bmiRange = '';
    let bmiRes = 'Please enter your Height and Weight to calculate your BMI.';
    if (props.bmi < 18.5) bmiRange = 'UNDERWEIGHT';
    else if (props.bmi >= 25) bmiRange = 'OVERWEIGHT';
    else bmiRange = 'HEALTHY';

    if (props.bmi) {
        bmiRes = <div className="bmi-display">
                    <p>Your BMI Is</p>
                    <p>
                        <span>{props.bmi}</span>
                        {bmiRange}
                    </p>
                </div>;
    }

    return (
        <section className="col-sm-6 col-xs-12 bmi-result">
            <div className="bmi-result-main bg-success">
                {bmiRes} 
                <p className="bmi-info">
                    HEALTHY WEIGHT(BMI of 18.5 - 24.9)
                </p>
            </div>
        </section>
    )
}