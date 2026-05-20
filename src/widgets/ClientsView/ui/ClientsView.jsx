import { useState } from 'react';
import { CustomerTable } from '../../../entities/customer/ui/CustomerTable';
import { CustomerControls } from '../../../features/CustomerControls/ui/CustomerControls';
import { useGetCustomersQuery } from '../../../shared/api/dummyApi';
import { Pagination } from '../../../shared/ui/Pagination/Pagination';
import './ClientsView.scss';

export const ClientsView = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const [sortConfig, setSortConfig] = useState({ key: '', order: '' });

  const {
    data = {},
    isLoading,
    isFetching,
    isError,
  } = useGetCustomersQuery({
    page,
    limit,
    sortBy: sortConfig.key,
    order: sortConfig.order,
    search: searchTerm,
  });

  const { customers = [], total = 0 } = data;

  if (isLoading) {
    return <div className="loading-state">Loading customer data...</div>;
  }

  if (isError) {
    return <div className="error-state">Failed to load customers.</div>;
  }

  const handleSort = (columnKey) => {
    let direction = 'asc';

    if (sortConfig.key === columnKey && sortConfig.order === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key: columnKey, order: direction });
    setPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
  };

  return (
    <div className="clients-widget-container">
      <h2 className="customer-profile-title">Customer Profile</h2>
      <CustomerControls onSearch={handleSearch} searchTerm={searchTerm} />

      <div className="widget-pages-container">
        <div
          style={{ opacity: isFetching ? 0.6 : 1 }}
          className="customer-table-wrapper"
        >
          <CustomerTable
            customers={customers}
            onSort={handleSort}
            sortConfig={sortConfig}
          />
        </div>
        <Pagination
          currentPage={page}
          totalEntries={total}
          entriesPerPage={limit}
          onPageChange={setPage}
          onLimitChange={handleLimitChange}
        />
      </div>
    </div>
  );
};
