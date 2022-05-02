
import { Button, Spacer } from '@nextui-org/react';
import { useNavigate } from "react-router-dom"
import './MenuItem.css';

export const MenuItem = ({
    icon = null,
    label = "",
    destino = "",
}) => {

    const navigate = useNavigate();

    const navigateTo = () => navigate(destino);

    return (
        <Button
            light color="primary"
            onClick={() => navigateTo()}
            auto css={{ width: '100%', justifyContent: 'left' }}
        >
            {icon}
            {/* <p style={{ fontSize: 14 }}>[O]</p> */}
            <Spacer x={0.5} />
            <p style={{ fontSize: 14 }}>{label}</p>
        </Button>
    );
}