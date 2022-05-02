import { Spacer } from "@nextui-org/react";
import Subtitle from "../subtitle.component";
import { MenuItem } from "./components/MenuItem/MenuItem";
import './MenuLeft.css';

export const MenuLeft = ({ arrayItems = [] }) => {

    return (
        <div className="menu_left">
            <Subtitle text="Menú" />
            <Spacer y={0.5} />
            <div>
                {
                    arrayItems.map(
                        (item, index) =>
                            <MenuItem
                                icon={item.icon}
                                label={item.label}
                                destino={item.destino}
                                key={index}
                            />
                    )
                }
            </div>
        </div>
    );
}