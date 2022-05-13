import './Navbar.css';

const Navbar = () => {

     return (
          <nav id="navBar" className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Ella Coffee</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Catering & Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Order Online</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     )
}

export default Navbar;