import './CustomerControls.scss';
import searchIcon from '../../../assets/icons/search.svg';

export const CustomerControls = ({onSearch, searchTerm}) => {
  return (
    <div className="customer-controls">
      <div className="search-section">
        <div className="search-input-wrapper">
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input type="text" placeholder="Full Name" value={searchTerm} onChange={(e) => onSearch(e.target.value)} />
        </div>
      </div>

      <div className="balance-section">
        <p className="balance-title">View Customer Account Balance</p>
        <div className="balance-inputs">
          <div className="input-group">
            <label htmlFor="accId">Acc ID</label>
            <input type="text" id="accId" placeholder="8" />
          </div>
          <div className="input-group">
            <label htmlFor="accBalance">Acc Balance</label>
            <input type="text" id="accBalance" placeholder="$1,100.00" />
          </div>
        </div>
      </div>

      <div className="actions-section">
        <button className="actions-btn btn-primary">Edit Info</button>
        <div className="btn-stack">
          <button className="actions-btn btn-outline">Add Customer</button>
          <button className="actions-btn btn-outline">Add Account</button>
        </div>
      </div>
    </div>
  );
};
