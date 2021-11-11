import React from "react";
import FloatingButton from "./FloatingButton";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <FloatingButton iconName="add" link="/surveys/new" />
        </div>
    );
};

export default Dashboard;