import React from 'react';

export const BmiForm = props => {
    const unitHeight = props.mode == 'imperial' ? 'inch' : 'm';
    const unitWeight = props.mode == 'imperial' ? 'lbl' : 'kg';
    let radioImperial = 'btn-default';
    let radioMetric = 'btn-default';
    if (props.mode == 'imperial') {
        radioImperial = 'btn-info';
    } else {
        radioMetric = 'btn-info';
    }

    return (
        <section className="col-sm-6 col-xs-12 bmi-calform">
            <form name="form_bmi">
                <fieldset className="radio">
                    <label className={"radio-inline btn " + radioMetric}>
                        <input type="radio" value="metric" name="mode" checked={props.mode == 'metric' ? 'checked' : ''} onChange={props.onChange} />
                        Metric
                    </label>
                    <label className={"radio-inline btn " + radioImperial}>
                        <input type="radio" value="imperial" name="mode" checked={props.mode == 'imperial' ? 'checked' : ''} onChange={props.onChange} />
                        Imperial
                    </label>
                </fieldset>
                <fieldset className="form-group">
                    <label>Height ({unitHeight})</label>
                    <input type="text" name="height" className="form-control" placeholder={unitHeight} value={props.height} onChange={props.onChange} />
                </fieldset>
                <fieldset className="form-group">
                    <label>Weight ({unitWeight})</label>
                    <input type="text" name="weight" className="form-control" placeholder={unitWeight} value={props.weight} onChange={props.onChange} />
                </fieldset>
                <a className="btn btn-primary" onClick={props.onSubmit}>Calculate</a>
            </form>
        </section>
    )
}