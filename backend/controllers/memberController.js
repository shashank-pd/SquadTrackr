import Member from "../models/Member.js";

// @desc    Get all members
// @route   GET /members
const getMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Get single member
// @route   GET /members/:id
const getMember = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json(member);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid member ID format" });
    }
    res.status(500).json({ error: error.message });
  }
};

// @desc    Create a member with image
// @route   POST /members
const createMember = async (req, res) => {
  try {
    const { regNo, name, role, email, bio, phone } = req.body;

    // Check for existing member with same regNo or email
    const existingMember = await Member.findOne({
      $or: [{ regNo }, { email }],
    });

    if (existingMember) {
      const conflictField =
        existingMember.regNo === regNo ? "registration number" : "email";
      return res.status(409).json({
        message: `Member with this ${conflictField} already exists`,
      });
    }

    // Build member data
    const memberData = {
      regNo,
      name,
      role,
      email,
      bio: bio || "",
      phone: phone || "",
      ...(req.file && { profileImage: `uploads/${req.file.filename}` }),
    };

    const member = await Member.create(memberData);
    res.status(201).json(member);
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ errors: messages });
    }

    // Handle duplicate key errors (race condition)
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      const message = `Member with this ${field} already exists`;
      return res.status(409).json({ message });
    }

    res.status(500).json({ error: error.message });
  }
};

export { getMembers, getMember, createMember };
