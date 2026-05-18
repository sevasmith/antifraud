import './AlertCard.scss';

export const AlertCard = ({ alert, isActive, onClick }) => {
  return (
    <div className={`alert-card ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="alert-info">
        <h4 className="alert-name">{alert.fullName}</h4>
        <p className="alert-transaction-id">{alert.transactionId}</p>
        <p className="alert-date">{alert.date}</p>
      </div>

      <div className="alert-transaction">
        <span className="badge">{alert.type}</span>
        <p className="alert-amount">{alert.amount}</p>
      </div>

      <div className={`alert-score score-${alert.riskLevel}`}>
        {alert.riskScore}
      </div>
    </div>
  );
};
