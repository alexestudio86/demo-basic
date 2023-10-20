import image01 from '../assets/theme/promo_01.jpg';
import image02 from "../assets/theme/promo_02.jpg";
import image03 from "../assets/theme/promo_03.jpg";
import image04 from "../assets/theme/promo_04.jpg";


export function Promotions () {
    return (
        <div className="w3-row w3-white" id="promotions">
            <div className="w3-content">
                <h1 className="w3-center">Promociones</h1>
                <figure className="w3-quarter w3-padding-small">
                    <img className="w3-circle" src={image01} alt="La marinara" height='150px' style={ {objectFit: 'cover', width: '100%', height: '100%', objectPosition: 'center'} } />
                    <figcaption className="w3-large w3-padding-small">La marinara</figcaption>
                </figure>
                <figure className="w3-quarter w3-padding-small">
                    <img className="w3-circle" src={image02} alt="La Margherita" height='150px' style={ {objectFit: 'cover', width: '100%', height: '100%', objectPosition: 'center'} } />
                    <figcaption className="w3-large w3-padding-small">La Margherita</figcaption>
                </figure>
                <figure className="w3-quarter w3-padding-small">
                    <img className="w3-circle" src={image03} alt="La Sfincione" height='150px' style={ {objectFit: 'cover', width: '100%', height: '100%', objectPosition: 'center'} } />
                    <figcaption className="w3-large w3-padding-small">La Sfincione</figcaption>
                </figure>
                <figure className="w3-quarter w3-padding-small">
                    <img className="w3-circle" src={image04} alt="La Fugazza" height='150px' style={ {objectFit: 'cover', width: '100%', height: '100%', objectPosition: 'center'} } />
                    <figcaption className="w3-large w3-padding-small">La Fugazza</figcaption>
                </figure>
            </div>
        </div>
    )
}