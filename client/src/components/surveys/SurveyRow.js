import React from "react";

const SurveyRow = ({survey}) => {
    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{survey.title}</span>
                <p>{survey.subject}</p>
                <p>{survey.body}</p>
                <br />
                <p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
            </div>
            <div className="card-action">
                <a href="#">Yes: {survey.yes}</a>
                <a href="#">No: {survey.no}</a>
            </div>
        </div>
    );
}

export default SurveyRow;