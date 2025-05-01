import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    regNo: {
      type: String,
      required: [true, "Please add a registration number"],
      unique: true,
      trim: true,
      minLength: [15, "Registration number must be exactly 15 characters"],
      maxLength: [15, "Registration number must be exactly 15 characters"],
      match: [
        /^RA\d{13}$/,
        "Registration number must start with RA followed by 13 digits (e.g., RA2211027010231)",
      ],
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      minLength: [2, "Name must be at least 2 characters"],
      maxLength: [50, "Name cannot exceed 50 characters"],
    },
    role: {
      type: String,
      required: [true, "Please add a role"],
      trim: true,
      minLength: [2, "Role must be at least 2 characters"],
      maxLength: [50, "Role cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    profileImage: {
      type: String,
      default: "",
      match: [
        /\.(jpg|jpeg|png|gif)$/i,
        "Please use a valid image format (jpg, jpeg, png, gif)",
      ],
    },
    bio: {
      type: String,
      default: "",
      maxLength: [500, "Bio cannot exceed 500 characters"],
    },
    phone: {
      type: String,
      default: "",
      trim: true,
      match: [
        /^(\+\d{1,3}[- ]?)?\d{10}$/,
        "Please add a valid phone number (e.g., 5551234567 or +1-555-123-4567)",
      ],
    },
  },
  {
    timestamps: true,
  },
);

export const Member = mongoose.model("Member", memberSchema);
