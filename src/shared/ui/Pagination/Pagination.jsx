import arrowLeftIcon from '../../../assets/icons/arrow-left.svg';
import arrowRightIcon from '../../../assets/icons/arrow-right.svg';

import './Pagination.scss';

export const Pagination = ({
  currentPage,
  totalEntries,
  entriesPerPage,
  onPageChange,
  onLimitChange,
}) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage) || 1;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          '...',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages,
        );
      }
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <div className="pagination-nav">
        <button
          className="nav-item"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <img src={arrowLeftIcon} alt="Arrow Left Icon" />
        </button>

        {getPageNumbers().map((num, idx) => (
          <button
            key={idx}
            className={`nav-item ${num === currentPage ? 'active' : ''} ${num === '...' ? 'ellipsis' : ''}`}
            disabled={num === '...'}
            onClick={() => num !== '...' && onPageChange(num)}
          >
            {num}
          </button>
        ))}

        <button
          className="nav-item"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <img src={arrowRightIcon} alt="Arrow Right Icon" />
        </button>
      </div>

      <div className="pagination-settings">
        <span className="stats-text">
          Showing {totalEntries === 0 ? 0 : startEntry} to {endEntry} of{' '}
          {totalEntries} entries
        </span>

        <div className="limit-selector">
          <select
            value={entriesPerPage}
            onChange={(e) => onLimitChange(Number(e.target.value))}
          >
            <option value={10}>10 entries per page</option>
            <option value={20}>20 entries per page</option>
            <option value={50}>50 entries per page</option>
          </select>
        </div>
      </div>
    </div>
  );
};
