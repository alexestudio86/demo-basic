import './header.css'
import logo from '../assets/theme/logo-vertical-transparente.png';


export function Header ( ){
    return (
        <header className='w3-row bgHeader'>
            <div className="w3-col s6 w3-display-container" style={ {height:'100vh'} } >
                <div className="w3-display-middle">
                    <h1 className='w3-jumbo w3-text-white'>Demo Platinum</h1>
                    <p className='w3-large w3-text-white'>¡Las mejores hamburguesas de la zona!</p>
                </div>
            </div>
            <div className="w3-col s6 w3-display-container" style={ {height:'100vh'} }>
                <div className="w3-display-middle">
                    <img className='w3-padding w3-round-xlarge w3-opacity-min w3-white' src={logo} alt="Logo" />
                </div>
            </div>
        </header> 
    )
}