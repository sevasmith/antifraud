import { useEffect, useState } from 'react';
import './AlertsList.scss';
import { AlertCard } from '../../../entities/alert/ui/AlertCard/AlertCard';
import { useGetFraudAlertsQuery } from '../../../shared/api/dummyApi';

export const AlertsList = () => {
  const [skip, setSkip] = useState(0);
  const [activeAlertId, setActiveAlertId] = useState(0);

  const { data: alerts = [], isLoading, isFetching, isError } = useGetFraudAlertsQuery({ limit: 15, skip });
  
  useEffect(() => {
    if (alerts.length > 0 && !activeAlertId) {
      setActiveAlertId(alerts[0].id);
    }
  }, [alerts, activeAlertId]);

  const handleScroll = (e) => {
    console.log(1);
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

    if (scrollHeight - Math.ceil(scrollTop) <= clientHeight + 1 && !isFetching) {
      console.log(1);
      
      setSkip((prevSkip) => prevSkip + 15);
    }
  };

  if (isLoading) return <aside className="alerts-list loading">Loading alerts...</aside>;
  if (isError) return <aside className="alerts-list error">Failed to load alerts.</aside>;

  return (
    <aside className="alerts-list" onScroll={handleScroll}>
      {alerts.map((alert) => (
        <AlertCard
          key={alert.id}
          alert={alert}
          isActive={activeAlertId === alert.id}
          onClick={() => setActiveAlertId(alert.id)}
        />
      ))}
    </aside>
  );
};
