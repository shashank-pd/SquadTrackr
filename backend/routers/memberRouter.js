import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  getMembers,
  getMember,
  createMember,
} from "../controllers/memberController.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer with better security practices
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpe?g|png|gif/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }

  cb(
    new multer.MulterError(
      "LIMIT_UNEXPECTED_FILE",
      "Only image files are allowed (JPEG, PNG, GIF)"
    )
  );
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 1, // Allow only single file upload
  },
});

// Enhanced error handling middleware
const handleFileUploadErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      status: "fail",
      message:
        err.code === "LIMIT_FILE_SIZE"
          ? "File size exceeds 5MB limit"
          : "Invalid file type or upload configuration",
    });
  } else if (err) {
    return res.status(500).json({
      status: "error",
      message: "Failed to process file upload",
    });
  }
  next();
};

// Member routes
router.post(
  "/",
  upload.single("profileImage"),
  handleFileUploadErrors,
  createMember
);

router.get("/", getMembers);
router.get("/:id", getMember);

export default router;
