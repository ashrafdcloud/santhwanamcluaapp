import React from 'react';

const StatisticsCard = ({ title, count, variationPercentage, iconName }) => {
  return (
    <div className='col-am-4 '>
      <div className="card-body">
        <h5 className="card-title">{title} <span> | Today</span></h5>
        <div className="d-flex align-items-center">
        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="material-icons">{iconName}</i> {/* Use the icon here */}
          </div>
          <div className="ps-3">
            <h6>{count}</h6>
            <span className="text-success small pt-1 fw-bold">{variationPercentage}%</span>
            <span className="text-muted small pt-2 ps-1">increase</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsCard;