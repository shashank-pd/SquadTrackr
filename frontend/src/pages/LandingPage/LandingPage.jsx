import { Link } from "react-router-dom";
import "./LandingPage.css";
import { teamMembers } from "../../utils/constants";

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="card">
          <h1>Welcome to SquadTracker</h1>
          <p className="subtitle">
            Manage your team with ease. Add new members, view member profiles,
            and keep track of your team's information in one place.
          </p>
          <div className="action-buttons">
            <Link to="/add" className="btn btn-primary">
              <i className="icon-add"></i>
              Add Member
            </Link>
            <Link to="/members" className="btn btn-secondary">
              <i className="icon-users"></i>
              View Members
            </Link>
          </div>
        </div>
      </section>
      <section className="team-section card">
        <h2>Meet Our Team</h2>
        <p>
          We're a passionate group dedicated to building amazing experiences
          together. Our team consists of talented individuals with diverse
          skills and backgrounds.
        </p>
        <div className="team-members-container">
          {teamMembers.map((member, index) => {
            return (
              <div key={index} className="team-member">
                <img
                  src={member}
                  alt={`Team member ${index + 1}`}
                  className="team-member-image"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
