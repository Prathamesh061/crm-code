const authController = require("../controllers/auth.controller");
const validateRequest = require("../middlewares/verifyUserReqBody");

module.exports = function (app) {
  app.post(
    "/crm/api/v1/auth/signup",
    [validateRequest.validateUserRequestBody],
    authController.signup
  );

  app.post(
    "/crm/api/v1/auth/signin",
    [validateRequest.validateUserSigninBody],
    authController.signin
  );
};
