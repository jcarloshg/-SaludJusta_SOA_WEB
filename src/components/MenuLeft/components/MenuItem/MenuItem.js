
import { Spacer } from '@nextui-org/react';
import './MenuItem.css';

export const MenuItem = ({
    icon = "",
    label = "",
    destino = "",
}) => {

    return (
        <div className="menuItem">
            <p style={{ fontSize: 14 }}>[O]</p>
            <Spacer x={0.5} />
            <p style={{ fontSize: 14 }}>{label}</p>
            {/* <p style={{ fontSize: 14 }}>{destino}</p> */}
        </div>
    );
}