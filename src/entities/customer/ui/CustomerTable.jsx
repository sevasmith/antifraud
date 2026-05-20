import sortIcon from '../../../assets/icons/sort.svg';
import './CustomerTable.scss';

export const CustomerTable = ({ customers = [], onSort, sortConfig }) => {
  const renderSortArrow = (columnKey) => {
    if (sortConfig.key !== columnKey)
      return <img src={sortIcon} alt="Sort Icon" className="sort-icon" />;
    return sortConfig.order === 'asc' ? (
      <span className="sort-icon enabled"> ↓</span>
    ) : (
      <span className="sort-icon enabled"> ↑</span>
    );
  };

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead className="table-head">
          <tr>
            <th onClick={() => onSort('id')}>CID{renderSortArrow('id')}</th>
            <th onClick={() => onSort('firstName')}>
              Full Name{renderSortArrow('firstName')}
            </th>
            <th className="disabled">City</th>
            <th className="disabled">State</th>
            <th className="disabled">Address</th>
            <th onClick={() => onSort('phone')}>
              Phone Number{renderSortArrow('phone')}
            </th>
            <th className="disabled align-right">Acc Balance</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{`${customer.firstName} ${customer.lastName}`}</td>
              <td>{customer.address?.city}</td>
              <td>{customer.address?.state}</td>
              <td>{customer.address?.address}</td>
              <td>{customer.phone}</td>
              <td className="align-right">{customer.accBalance || '$0.00'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
