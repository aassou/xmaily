import React from "react";
import { Link } from "react-router-dom";

const FloatingButton = ({iconName, link}) => {
    return (
        <div className="fixed-action-btn">
            <Link to={link} className="btn-floating btn-large red">
                <i className="large material-icons">{iconName}</i>
            </Link>
        </div>
    );
};

export default FloatingButton