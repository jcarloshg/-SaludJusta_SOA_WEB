import logo from '../assets/logo.png';
import SecondaryButton from './secondary-button.component';
import './topbar.css';

function Topbar({ showActions = false }) {
  return (
    <header className="topbar-header">
      <div className="topbar">
        <div className="topbar__left">
          <img width={75} src={logo} alt="logo" objectFit="cover" />
        </div>
        {showActions && (
          <div className="topbar__right">
            {/* <SecondaryButton width={75} text="Perfil" /> */}
            <SecondaryButton width={75} text="Cerrar sesión" />
          </div>
        )}
      </div>
    </header>
  );
}

export default Topbar;
