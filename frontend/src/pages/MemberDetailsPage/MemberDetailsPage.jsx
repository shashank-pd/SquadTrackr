import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./MemberDetailsPage.css";
import { BACKEND_URL } from "../../utils/constants";

function MemberDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/api/members/${id}`);
        setMember(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching member details:", error);
        setError(
          "Failed to load member details. The member may not exist or there was a server error.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMemberDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="member-details-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading member details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="member-details-page">
        <div className="card error-container">
          <h1>Error</h1>
          <p className="error-message">{error}</p>
          <div className="action-buttons">
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <Link to="/members" className="btn btn-primary">
              View All Members
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="member-details-page">
        <div className="card">
          <h1>Member Not Found</h1>
          <p>The member you're looking for doesn't exist or was removed.</p>
          <div className="action-buttons">
            <Link to="/members" className="btn btn-primary">
              View All Members
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="member-details-page">
      <div className="card">
        <div className="member-profile">
          <div className="profile-header">
            <div className="profile-image-container">
              {member.profileImage ? (
                <img
                  src={`${BACKEND_URL}/${member.profileImage}`}
                  alt={member.name}
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/300/300";
                  }}
                />
              ) : (
                <div className="profile-image-placeholder">
                  {member.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="profile-title">
              <h1>{member.name}</h1>
              <p className="member-role">{member.role}</p>
            </div>
            <div className="back-link">
              <button onClick={() => navigate(-1)} className="btn-back">
                &larr; Back
              </button>
            </div>
          </div>

          <div className="profile-content">
            <div className="info-section">
              <h2>Contact Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Registration No</span>
                  <span className="info-value">{member.regNo}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <a
                    href={`mailto:${member.email}`}
                    className="info-value email-link"
                  >
                    {member.email}
                  </a>
                </div>
                {member.phone && (
                  <div className="info-item">
                    <span className="info-label">Phone</span>
                    <a href={`tel:${member.phone}`} className="info-value">
                      {member.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {member.bio && (
              <div className="info-section">
                <h2>Bio</h2>
                <p className="bio-text">{member.bio}</p>
              </div>
            )}

            <div className="info-section">
              <h2>Member Since</h2>
              <p>
                {new Date(member.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetailsPage;
