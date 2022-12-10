import './Navbar.css';

const Navbar = () => {

  const renderComponent = () => {
    return (
      <div className='header'>
        <div className="container">
          <div className="row">
            <div className="header-wrapper"></div>
            <div className="logo">
              <a href='/'>E-Commerce</a>
              <div className="user-actions"></div>
              <a href='/Cart'>Cart</a>
              <div className="user-intro">Guest</div>
              <div className="login-btn">
                <a href='/Login'>Login</a>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
  return (
    renderComponent()
  )
}

export default Navbar
