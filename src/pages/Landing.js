import main from '../assets/images/main.svg';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Your ultimate <span>Job tracking</span> app
          </h1>
          <p>
            Gojob will reduce a significant amount of time that you would
            normally spend organizing timesheets, making reports, and tracking
            progress with minimal input from you.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
