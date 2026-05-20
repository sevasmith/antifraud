import { DonutChart } from '../../../shared/ui/DonutChart/DonutChart';
import './ProcessedTransactionsCard.scss';

export const ProcessedTransactionsCard = ({ chart }) => {
  return (
    <div className="first-box">
      <p className="first-box-title">Processed Transactions</p>
      <div className="first-box-content">
        <DonutChart chart={chart} />
        <div className="first-box-details">
          <p className="first-box-data">12 122</p>
          <ul className="chart-legend">
            {chart.data.map((item) => (
              <li key={item.id} style={{ '--dot-color': item.color }}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
