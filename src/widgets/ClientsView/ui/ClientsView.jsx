import { CustomerControls } from '../../../features/CustomerControls/ui/CustomerControls';
import './ClientsView.scss';

export const ClientsView = () => {
    return (
        <div className="clients-widget-container">
            <h2 className="customer-profile-title">Customer Profile</h2>
            <CustomerControls />
        </div>
    )
}
