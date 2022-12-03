import { Link } from "react-router-dom";

export default function Header () {
    return (
        <div className='header p-t p-b'>
            <div className="header__content container">
                <Link to='/'><img src="https://i.ibb.co/fSJ64xL/logo-tmac.png"/></Link>
            </div>
        </div>
    )
}