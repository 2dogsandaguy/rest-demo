/* import farmPhoto from '../assets/images/me-on-farm.jpg'; */
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
const Header = () => {
  return (
    <header className="bg-dark text-light p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 mb-4" 
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
              }}
            >
              <span 
              style={{ background: '#fca311',
               padding: '0 10px',
                borderRadius: '5px' 
                }}
                >
                  Merica BBQ
                  </span>
            </h1>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" 
                to="/" 
                style={{ background: '#11fc5f',
                padding: '5px',
                borderRadius: '5px' 
                }}
                  >
                About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="Menu" 
                style={{ background: '#11fc57',
                 padding: '5px',
                  borderRadius: '5px' 
                }}
                  >
                    Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="OrderPage" 
                style={{ background: '#11fc9a',
                 padding: '5px', 
                 borderRadius: '5px' 
                }}
                 >
                  Order page
                  </Link>
              </li>
              <li className="nav-item">
                <Link 
                className="nav-link" 
                to="HomePage"  
                style={{ background: '#11fc57',
                 padding: '5px',
                  borderRadius: '5px' 
                }}
                  >
                    Home Page
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-right">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="30"
        fill="currentColor"
        className="bi bi-flag"
        viewBox="0 0 16 16"
        style={{ marginTop: '10px', marginRight: '10px' }}
      >
        <path
          fillRule="evenodd"
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1 1a1 1 0 0 1 1-1h7.172a1 1 0 0 1 .707.293l3.536 3.536a1 1 0 0 1 .293.707V13a1 1 0 0 1-1 1H9.586l-1-1H13a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z"
        />
        <path
          fillRule="evenodd"
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zM3.414 4H11a1 1 0 0 1 .707.293l3.536 3.536a1 1 0 0 1 .293.707V13a1 1 0 0 1-1 1H9.586l-1-1H13a1 1 0 0 0 1-1V4H3.414z"
        />
        <path
          fillRule="evenodd"
          d="M3.707 5a1 1 0 0 1 .707.293l3.536 3.536a1 1 0 0 1 .293.707v6.586l-1-1V8a1 1 0 0 0-1-1H2V5h1.707zM2 4a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1H0v3a2 2 0 0 0 2 2h2v-2a1 1 0 0 1 1-1h7.586l2 2H4a1 1 0 0 1-1 1H1a2 2 0 0 0 2-2V8a1 1 0 0 1 1-1h3.586l2 2H4a1 1 0 0 0-1-1H1V6a2 2 0 0 0 2-2z"
        />
      </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;