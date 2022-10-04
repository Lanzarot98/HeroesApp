import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext( AuthContext );

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
        logout();
    }
    

    return (
        <nav className="navbar navbar-expand-md navbar-main navbar-dark bg-dark p-2">
            <div className="container-fluid">

                <Link 
                    className="navbar-brand" 
                >
                    Asociaciones
                </Link>
                <button 
                    className="navbar-toggler"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">

                        <NavLink 
                            className={ ({isActive}) => 
                                `nav-item nav-link ${isActive ? 'active' : ''}` 
                            }
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => 
                            `nav-item nav-link ${isActive ? 'active' : ''}` 
                            } 
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => 
                            `nav-item nav-link ${isActive ? 'active' : ''}` 
                            } 
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                    <div className="navbar-collapse navbar-nav w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <span className='nav-item nav-link text-primary'>
                                {user?.name}
                            </span>

                            <button
                                className='btn btn-outline-dark nav-item nav-link '
                                onClick={ onLogout }
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}