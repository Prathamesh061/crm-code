const authController = require("../controllers/auth.controller");
const validateSignupRequest = require("../middlewares/verifyUserReqBody");

module.exports = function (app) {
  app.post(
    "/crm/api/v1/auth/signup",
    [validateSignupRequest.validateUserRequestBody],
    authController.signup
  );

  app.post("/crm/api/v1/auth/signin", authController.signin);
};
