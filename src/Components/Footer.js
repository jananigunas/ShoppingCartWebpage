import React from 'react';

const Footer = () => { 
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">CONTACT US</h5>
                        <p className="grey-text text-lighten-4">You can contact us on 234-8094-34033-33</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">RETURN POLICY</h5>
                        <p className="grey-text text-lighten-4">We accept returns after 7 days max</p>
                    </div>
                </div>
                <div className="white-text center">© 2020 Copyright: Shopping</div>
            </div>
        </footer>
    );
}

export default Footer;