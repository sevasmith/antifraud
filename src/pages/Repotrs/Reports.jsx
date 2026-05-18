import { AlertsList } from '../../widgets/AlertsList/ui/AlertsList';
import { ReportDetails } from '../../widgets/ReportDetails/ui/ReportDetails';
import './Reports.scss';

export const Reports = () => {
  return (
    <div className="reports-page">

      <div className="reports-sidebar">
        <AlertsList />
      </div>

      <div className="reports-content">
        <div className="reports-header">
          <p>FRAUDULENT ACTIVITY ALERT</p>
        </div>

        <div className="reports-detail-container">
          <ReportDetails />
        </div>
      </div>
    </div>
  );
};
