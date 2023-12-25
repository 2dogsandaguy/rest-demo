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
                padding: '10px',
                borderRadius: '5px',
                marginRight: '10px' 
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
                 padding: '10px',
                  borderRadius: '5px',
                  marginRight: '10px' 
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
                 padding: '10px', 
                 borderRadius: '5px',
                 marginRight: '10px' 
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
                 padding: '10px',
                  borderRadius: '5px',
                  marginRight: '10px' 
                }}
                  >
                    Home Page
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-right">
          <img 
              src="/images/American-Flag.png"  // Update the path to match your file structure
              alt="American Flag"
              style={{
                width: '150px',  // Adjust the width and height as needed
                height: '100px',
                objectFit: 'cover',  // This property ensures the image maintains its aspect ratio
                marginLeft: 'auto',  // Move the image to the right
                display: 'block',  // Make sure it's a block-level element
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;