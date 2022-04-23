import logo from '../assets/images/log.png'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
        <span style={{fontSize:39, paddingLeft:8, fontWeight:700, letterSpacing:2}}>Trekathon</span>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Treks <span>tracking</span> app
          </h1>
          <p>some text</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}
export default Landing