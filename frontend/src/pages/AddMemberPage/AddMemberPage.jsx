import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddMemberPage.css";
import { BACKEND_URL } from "../../utils/constants";

function AddMemberPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    regNo: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState({ type: "", message: "" });
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile && validateFile(droppedFile)) {
        setFile(droppedFile);
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(droppedFile);
        setErrors({ ...errors, profileImage: "" });
      }
    }
  };

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      setErrors({
        ...errors,
        profileImage: "Invalid file type (JPEG, PNG, GIF only)",
      });
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, profileImage: "File size exceeds 5MB limit" });
      return false;
    }
    return true;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Generate preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);

      // Clear error for file
      if (errors.profileImage) {
        setErrors({ ...errors, profileImage: "" });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Registration number validation
    if (!formData.regNo) {
      newErrors.regNo = "Registration number is required";
    } else if (!/^RA\d{13}$/.test(formData.regNo)) {
      newErrors.regNo =
        "Registration number must start with RA followed by 13 digits";
    }

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Role validation
    if (!formData.role) {
      newErrors.role = "Role is required";
    } else if (formData.role.length < 2) {
      newErrors.role = "Role must be at least 2 characters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional field)
    if (formData.phone && !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Bio validation (optional field)
    if (formData.bio && formData.bio.length > 500) {
      newErrors.bio = "Bio cannot exceed 500 characters";
    }

    // Profile Image validation
    if (!file) {
      newErrors.profileImage = "Please upload a profile image";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitMessage({ type: "", message: "" });

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      if (file) {
        formDataToSend.append("profileImage", file);
      }

      const response = await axios.post(
        `${BACKEND_URL}/api/members`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setSubmitMessage({
        type: "success",
        message: "Member added successfully!",
      });

      setFormData({
        regNo: "",
        name: "",
        role: "",
        email: "",
        phone: "",
        bio: "",
      });
      setFile(null);
      setPreview(null);

      // Redirect to member list after short delay
      setTimeout(() => {
        navigate("/members");
      }, 2000);
    } catch (error) {
      console.error("Error adding member:", error);

      // Handle error response
      let errorMessage = "Failed to add member. Please try again.";

      if (error.response) {
        // Server responded with an error
        if (error.response.data.errors) {
          // Validation errors
          setErrors((prevErrors) => ({
            ...prevErrors,
            ...error.response.data.errors.reduce((acc, err) => {
              const field = err.toLowerCase().includes("registration")
                ? "regNo"
                : err.toLowerCase().includes("email")
                  ? "email"
                  : err.toLowerCase().includes("name")
                    ? "name"
                    : err.toLowerCase().includes("role")
                      ? "role"
                      : err.toLowerCase().includes("phone")
                        ? "phone"
                        : err.toLowerCase().includes("bio")
                          ? "bio"
                          : "general";
              return { ...acc, [field]: err };
            }, {}),
          }));
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      }

      setSubmitMessage({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle removing uploaded image
  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="add-member-page">
      <div className="card">
        <h1>Add Team Member</h1>
        <p className="subtitle">
          Fill out the form below to add a new team member.
        </p>

        {submitMessage.message && (
          <div className={`message ${submitMessage.type}`}>
            {submitMessage.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="add-member-form">
          <div className="form-columns">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="regNo" className="form-label">
                  Registration Number
                </label>
                <input
                  type="text"
                  id="regNo"
                  name="regNo"
                  className={`form-input ${errors.regNo ? "error" : ""}`}
                  value={formData.regNo}
                  onChange={handleChange}
                  placeholder="e.g., RA2211027010231"
                />
                {errors.regNo && (
                  <span className="error-message">{errors.regNo}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-input ${errors.name ? "error" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className={`form-input ${errors.role ? "error" : ""}`}
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g., Developer, Designer, Manager"
                />
                {errors.role && (
                  <span className="error-message">{errors.role}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? "error" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-column">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number (Optional)
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className={`form-input ${errors.phone ? "error" : ""}`}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., +1-555-123-4567"
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="bio" className="form-label">
                  Bio (Optional)
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  className={`form-textarea ${errors.bio ? "error" : ""}`}
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Brief description about the team member..."
                />
                {errors.bio && (
                  <span className="error-message">{errors.bio}</span>
                )}
                <span className="character-count">
                  {formData.bio.length}/500
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="profileImage" className="form-label">
                  Profile Image
                </label>
                <div className="file-upload-container">
                  <div
                    className={`file-upload ${errors.profileImage ? "error" : ""}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() =>
                      document.getElementById("profileImage").click()
                    }
                  >
                    {preview ? (
                      <div className="preview-container">
                        <button
                          type="button"
                          className="remove-image"
                          onClick={handleRemove}
                        >
                          x
                        </button>
                        <img
                          src={preview}
                          alt="Profile preview"
                          className="image-preview"
                        />
                      </div>
                    ) : (
                      <div className="upload-placeholder">
                        <span className="upload-icon">📷</span>
                        <span>Click to upload image</span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                  {errors.profileImage && (
                    <span className="error-message">{errors.profileImage}</span>
                  )}
                  <p className="file-info">
                    Supported formats: JPG, PNG, GIF (Max: 5MB)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-submit" disabled={loading}>
              {loading ? "Adding Member..." : "Add Member"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMemberPage;
