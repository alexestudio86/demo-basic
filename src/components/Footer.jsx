export function Footer () {
    return (
        <footer className="w3-container w3-black" id="footer">
            <div className="w3-row w3-center" style={ {alignItems: 'center', display: 'flex'} }>
                <p className="w3-half w3-xlarge">Síguenos en redes</p>
                <div className="w3-half">
                    <a className="w3-text-white w3-hover-text-blue w3-padding-small" href="#" target="_blank">
                        <i className="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a className="w3-text-white w3-hover-text-blue w3-padding-small" href="#" target="_blank">
                        <i className="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a className="w3-text-white w3-hover-text-blue w3-padding-small" href="#" target="_blank">
                        <i className="fab fa-instagram-square fa-2x"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}