import visaLogo from '../../../assets/icons/visa.svg';
import './ReportDetails.scss';

export const ReportDetails = () => {
    return (
        <div className="report-details">

            <div className="rd-banner">
                <div className="rd-score score-warning">145</div>
                <div className="rd-info">
                    <h2>Jeffrey S Navarro</h2>
                    <div className="rd-details">
                        <span className='rd-transaction-id'>#6055</span>
                        <span className='rd-date'>11/5/2022 3:12 PST</span>
                    </div>
                </div>
                <div className="rd-transaction">
                    <span className="badge">Cash-in</span>
                    <p className="amount">$1005.50</p>
                </div>
            </div>

            <div className="rd-content-grid">
                <div className="rd-data-column">
                    <div className="rd-card">
                        <h3 className="card-title">Summary</h3>
                        <ul className="key-value-list">
                            <li><span className="key">Payment</span> <img src={visaLogo} alt="Visa Logo" className="value" /></li>
                            <li><span className="key">CVV Response</span> <span className="value text-green">CVV2 Match (M)</span></li>
                            <li><span className="key">AVS Response</span> <span className="value text-green">Full Match (Y)</span></li>
                            <li><span className="key">Number</span> <span className="value">5237 55xx xxxx</span></li>
                            <li><span className="key">Bank</span> <span className="value">AMERICAN EXPRESS INTERNATIONAL (NZ) INC.</span></li>
                        </ul>
                    </div>

                    <div className="rd-card">
                        <h3 className="card-title">Account</h3>
                        <ul className="key-value-list">
                            <li><span className="key">Number</span> <span className="value">488754555</span></li>
                            <li><span className="key">Order Amount</span> <span className="value">$1005.50</span></li>
                            <li><span className="key">Creation Date</span> <span className="value">11/5/2022 3:12 PST</span></li>
                            <li><span className="key">Update Date</span> <span className="value">11/5/2022 3:12 PST</span></li>
                            <li><span className="key">Last Order Ext. ID</span> <span className="value">871100455592</span></li>
                        </ul>
                    </div>
                </div>

                <div className="rd-map-column">
                    <div className="rd-card map-card">
                        <h3 className="card-title">ATM</h3>
                        <p className="address">332 Patterson Street</p>
                        <div className="map-placeholder">
                            <p>Map</p>
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