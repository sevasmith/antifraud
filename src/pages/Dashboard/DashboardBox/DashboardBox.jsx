import { DonutChart } from '../../../shared/ui/DonutChart/DonutChart';
import './DashboardBox.scss';

export const DashboardBox = ({ icon, data, label, first, chart, button }) => {
  return (
    <div className={`box ${first ? 'first-box' : ''}`}>
      <div className="box-content">
        {icon ? (
          <img src={icon} alt={`${label} Icon`} className="box-icon" />
        ) : null}
        {chart ? (
          <div className="donut-wrapper">
            <p className="donut-data">{data}</p>
            <DonutChart chart={chart} />
          </div>
        ) : (
          <div className="box-details">
            <p className="box-data">{data}</p>
            <p className="box-label">{label}</p>
          </div>
        )}
      </div>
      {button ? <button className="box-button">Analyze</button> : null}
      {chart ? <p className="chart-box-label">{label}</p> : null}
    </div>
  );
};
