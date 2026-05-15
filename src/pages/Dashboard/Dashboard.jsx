import { DashboardBox } from './DashboardBox/DashboardBox';
import transactionsIcon from '../../assets/icons/transactions.svg';
import pendingIcon from '../../assets/icons/pending.svg';
import rateIcon from '../../assets/icons/rate.svg';
import rejectedIcon from '../../assets/icons/rejected.svg';
import postponedIcon from '../../assets/icons/postponed.svg';
import { ProcessedTransactionsCard } from './ProcessedTransactions/ProcessedTransactionsCard';
import './Dashboard.scss';

const processedChart = {
  innerRadius: 0,
  startAngle: 0,
  endAngle: 360,
  data: [
    { id: 1, name: 'Deposits', value: 9627, color: 'var(--color-primary)' },
    {
      id: 2,
      name: 'Loans',
      value: 2950,
      color: 'color-mix(in srgb, var(--color-primary) 70%, transparent)',
    },
    {
      id: 3,
      name: 'Withdrawals',
      value: 800,
      color: 'color-mix(in srgb, var(--color-primary) 35%, transparent)',
    },
  ],
};

const approvedChart = {
  innerRadius: 85,
  startAngle: 90,
  endAngle: -270,
  data: [
    { id: 1, name: 'Deposits', value: 9627, color: 'var(--color-approved)' },
    { id: 2, name: 'Deposits', value: 327, color: 'var(--color-declined)' },
  ],
};

const DASHBOARD_BOXES = [
  { id: 1, icon: transactionsIcon, data: '12 112', label: 'All transactions' },
  { id: 2, icon: rateIcon, data: '99.3%', label: 'Approval Rate' },
  { id: 3, icon: pendingIcon, data: '10', label: 'Pending Approval' },
  {
    id: 4,
    chart: approvedChart,
    data: '12027',
    label: 'Approved Transactions',
  },
  {
    id: 5,
    icon: rejectedIcon,
    data: '15',
    label: 'Rejected Transactions',
    button: true,
  },
  {
    id: 6,
    icon: postponedIcon,
    data: '70',
    label: 'Postponed Approval',
    button: true,
  },
];

export const Dashboard = () => {
  return (
    <section className="dashboard">
      <p className="dashboard-title">Fraud Management Dashboard</p>
      <div className="dashboard-content">
        <ProcessedTransactionsCard chart={processedChart} />
        {DASHBOARD_BOXES.map((item) => (
          <DashboardBox
            key={item.id}
            icon={item.icon}
            data={item.data}
            label={item.label}
            first={item.first}
            button={item.button}
            chart={item.chart}
          />
        ))}
      </div>
    </section>
  );
};
