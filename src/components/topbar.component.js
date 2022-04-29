import logo from '../assets/logo.png';
import SecondaryButton from './secondary-button.component';
import { Image } from '@nextui-org/react';
import './topbar.css';

function Topbar({ showActions = false }) {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <div className="topbar__logo">
          <Image width={75} src={logo} alt="logo" objectFit="cover" />
        </div>
      </div>
      {showActions && (
        <div className="topbar__right">
          <SecondaryButton width={75} text="Perfil" />
          <SecondaryButton width={75} text="Cerrar sesión" />
        </div>
      )}
    </div>
  );
}

export default Topbar;
