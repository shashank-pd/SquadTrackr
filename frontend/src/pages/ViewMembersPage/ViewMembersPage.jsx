import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ViewMembersPage.css";
import { BACKEND_URL } from "../../utils/constants";

function ViewMembersPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/api/members`);
        setMembers(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching members:", error);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="view-members-page">
      <div className="card">
        <h1>Team Members</h1>
        <p className="subtitle">View all members of our amazing team</p>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading members...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p className="error-message">{error}</p>
            <button
              className="btn btn-retry"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : members.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">👥</div>
            <h2>No Members Yet</h2>
            <p>Your team is waiting to be built! Add your first member now.</p>
            <Link to="/add" className="btn btn-primary">
              Add Member
            </Link>
          </div>
        ) : (
          <div className="members-grid">
            {members.map((member) => (
              <div key={member._id} className="member-card">
                <div className="member-image-container">
                  {member.profileImage ? (
                    <img
                      src={`${BACKEND_URL}/${member.profileImage}`}
                      alt={member.name}
                      className="member-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/150/150";
                      }}
                    />
                  ) : (
                    <div className="member-image-placeholder">
                      {member.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <Link to={`/members/${member._id}`} className="btn btn-view">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewMembersPage;
