import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["token"]; // read token

    if (!token) {
      return res.json({ success: false, message: "Not authorized, login again" });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // attach userId to request
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    res.json({ success: false, message: "Auth Error" });
  }
};

export default authMiddleware;
