import visaLogo from '../../../assets/icons/visa.svg';
import './ReportDetails.scss';

export const ReportDetails = ({ alert }) => {
  return (
    <div className="report-details">
      <div className="rd-banner">
        <div className="rd-score score-warning">145</div>
        <div className="rd-info">
          <h2>{alert?.fullName}</h2>
          <div className="rd-details">
            <span className="rd-transaction-id">{alert?.transactionId}</span>
            <span className="rd-date">{alert?.date}</span>
          </div>
        </div>
        <div className="rd-transaction">
          <span className="badge">{alert?.type}</span>
          <p className="amount">{alert?.amount}</p>
        </div>
      </div>

      <div className="rd-content-grid">
        <div className="rd-data-column">
          <div className="rd-card">
            <h3 className="card-title">Summary</h3>
            <ul className="key-value-list">
              <li>
                <span className="key">Payment</span>{' '}
                <img src={visaLogo} alt="Visa Logo" className="value" />
              </li>
              <li>
                <span className="key">CVV Response</span>{' '}
                <span className="value text-green">{alert?.cvvResponse}</span>
              </li>
              <li>
                <span className="key">AVS Response</span>{' '}
                <span className="value text-green">{alert?.avsResponse}</span>
              </li>
              <li>
                <span className="key">Number</span>{' '}
                <span className="value">{alert?.cardNumber}</span>
              </li>
              <li>
                <span className="key">Bank</span>{' '}
                <span className="value">{alert?.bankName}</span>
              </li>
            </ul>
          </div>

          <div className="rd-card">
            <h3 className="card-title">Account</h3>
            <ul className="key-value-list">
              <li>
                <span className="key">Number</span>{' '}
                <span className="value">{alert?.accountNumber}</span>
              </li>
              <li>
                <span className="key">Order Amount</span>{' '}
                <span className="value">{alert?.amount}</span>
              </li>
              <li>
                <span className="key">Creation Date</span>{' '}
                <span className="value">{alert?.date}</span>
              </li>
              <li>
                <span className="key">Update Date</span>{' '}
                <span className="value">{alert?.date}</span>
              </li>
              <li>
                <span className="key">Last Order Ext. ID</span>{' '}
                <span className="value">{alert?.lastOrderId}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="rd-map-column">
          <div className="rd-card map-card">
            <h3 className="card-title">ATM</h3>
            <p className="address">{alert?.atmAddress}</p>
            <div className="map-container">
              <iframe
                title="ATM Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(alert?.atmAddress)}&t=&z=14&ie=UTF8&iwloc=near&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ACTION BAR */}
      <div className="rd-actions">
        <button className="btn btn-approve">Approve</button>
        <button className="btn btn-decline">Decline</button>
        <button className="btn btn-analyze">Analyze</button>
      </div>
    </div>
  );
};
