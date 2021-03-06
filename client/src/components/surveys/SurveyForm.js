import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field 
                    key={name} 
                    label={label} 
                    type="text" 
                    name={name} 
                    component={SurveyField}
                />
            )
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="waves-effect waves-light btn-large red">
                        Cancel <i className="material-icons right">clear</i>
                    </Link>
                    <button type="submit" className="waves-effect waves-light btn-large blue right">
                        Next <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({name, noValueError}) => {
        if (!values[name]) {
            errors[name] = noValueError
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);