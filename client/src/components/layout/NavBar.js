import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";

const NavBar = ({auth: {isAuthenticated, loading}, logout}) => {

  const authLinks = <li><Link to="/" onClick={() => logout()}>
    <i className="fas fa-sign-out-alt"/>{' '}
    <span className="hide-sm">Logout</span>
  </Link></li>;
  const guestLinks = <React.Fragment>
                        <li><Link to="!#">Developers</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                      </React.Fragment>;

  return (
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"/> DevConnector
          </Link>
        </h1>

        {!loading &&
        <ul>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>}

      </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {logout} )(NavBar);