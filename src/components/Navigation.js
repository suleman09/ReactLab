import "./Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => (
    <header className='navbar'>
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/en/e/e8/Vesitlog-transparent.png" alt="BigCo Inc. logo"/>
        <div className='navbar__title navbar__item'>Vesit</div>
        <Link to = '/home'><div className='navbar__item'>Home</div></Link>
        <Link to ='/about'><div className='navbar__item'>About Us</div></Link>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
);

const App = () => (
    <div>
        <Navigation />
        <main>We sell cutting edge knives.</main>
    </div>
);

export {Navigation};

