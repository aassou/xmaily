import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyRow from './SurveyRow';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveyList() {
        return this.props.surveys.reverse().map((survey, index) => {
            return <SurveyRow survey={survey} key={index} />
            console.log('test test');
        });
    }

    render() {
        return (
            <div>
                {this.renderSurveyList()}
            </div>
        );
    }
};

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);