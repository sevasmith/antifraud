import { useState } from 'react';
import { AlertsList } from '../../widgets/AlertsList/ui/AlertsList';
import { ReportDetails } from '../../widgets/ReportDetails/ui/ReportDetails';
import './Reports.scss';

export const Reports = () => {
  const [activeAlert, setActiveAlert] = useState(null);

  return (
    <div className="reports-page">
      <div className="reports-sidebar">
        <AlertsList activeAlert={activeAlert} setActiveAlert={setActiveAlert} />
      </div>

      <div className="reports-content">
        <div className="reports-header">
          <p>FRAUDULENT ACTIVITY ALERT</p>
        </div>

        <div className="reports-detail-container">
          <ReportDetails alert={activeAlert} />
        </div>
      </div>
    </div>
  );
};
