import React from 'react';
import './ReportForm.css';

const ReportForm = (props) => {
    return (
        <div className="report-form">
            <input className="field field-title" type="text" id="reportTitle"/>
            <input className="field field-cost" type="text" id="reportCost"/>
            <span>KGS</span>
            <button onClick={props.click}>Add</button>
        </div>
    )
};

export default ReportForm;