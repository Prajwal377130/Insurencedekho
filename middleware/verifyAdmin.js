// middleware/verifyAdmin.js
exports.verifyAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }

  next();
};
