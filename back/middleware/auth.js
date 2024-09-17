const jwt = require("jsonwebtoken");

auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
      role: decodedToken.role,
    };
    console.log("authentification middleware");
    next();
  } catch (error) {
    res.status(401).json(" ERROR : 401 Unauthorized ");
  }
};


user = (req, res, next) => {
  console.log("user IEIHDZOHUA");
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    if (decodedToken.role !== "user") {
      throw "Invalid user role";
    }
    next();
  } catch (error) {
    res.status(401).json(" ERROR : Invalid user role");
  }
}

admin = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    if (decodedToken.role !== "admin") {
      throw "Invalid user role";
    }
    next();
  }
  catch (error) {
    res.status(401).json(" ERROR : Invalid user role");
  }
}


module.exports = { auth, admin };

