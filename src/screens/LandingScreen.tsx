import "./style.css";
import axios from "axios";

const apiCall = () => {
  // axios.get("http://localhost:8080").then((data) => {
  axios.get("https://find-it-api.vercel.app/").then((data) => {
    console.log("data", data);
  });
};
const LandingScreen = () => {
  return (
    <>
      <nav
          onClick={apiCall}
        className="cursor-pointer"
      >
        <p>Click here to check the github repository</p>
      </nav>

      <main>
        <div className="title">
          <h1 id="title-heading">Findit</h1>
        </div>
        <div className="search-bar">
          <input
            id="search-bar-field"
            type="text"
            placeholder="Model Number"
            required
          />
        </div>
        <div className="buttons">
          <button className="button cursor-pointer" id="search-button">
            Search
          </button>
          <button className="button cursor-pointer" id="feeling-lucky-button">
            I'm Feeling Lucky
          </button>
        </div>
        <div className="accessories-section" id="accessories-section">
          <div
            className="accessories-section-heading"
            id="accessories-section-heading"
          >
            <p>This is what comes with your TV.</p>
          </div>
          <div className="accessories-section-bulletin">
            <ul id="accessories-list"></ul>
          </div>
          <div
            className="accessories-section-link cursor-pointer"
            id="accessories-section-link"
          >
            Quick User Guide
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-content-header">
            <p>
              Discover the accessories that comes with your TV.
              <br />
              <span className="footer-contact-message">
                If you cannot find the model number of your TV, please
                <a href="mailto:amritd.post@gmail.com,jibinjoy8897@gmail.com?subject=Update%20Database%20Request%20:%20FindIt&body=Enter%20Model%20Number%20:">
                  contact us
                </a>
                for assistance.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingScreen;
