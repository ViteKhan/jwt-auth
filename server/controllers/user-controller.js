const userService = require('../service/user-service');
const ApiError = require('../excerptions/api-error');
const { validationResult } = require('express-validator');

class UserController {
  async registration(request, response, next) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const { email, password } = request.body;
      const userData = await userService.registration(email, password);
      const maxAge = 30 * 24 * 60 * 60 * 1000;
      response.cookie('refreshToken', userData.refreshToken, { maxAge, httpOnly: true });

      return response.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(request, response, next) {
    try {
      const { email, password } = request.body;
      const userData = await userService.login(email, password);
      const maxAge = 30 * 24 * 60 * 60 * 1000;
      response.cookie('refreshToken', userData.refreshToken, { maxAge, httpOnly: true });

      return response.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(request, response, next) {
    try {
      const
    } catch (e) {
      next(e);
    }
  }

  async activate(request, response, next) {
    try {
      const activationLink = request.params.link;
      await userService.activate(activationLink);
      return response.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(request, response, next) {
    try {

    } catch (e) {
      next(e);
    }
  }

  async getUsers(request, response, next) {
    try {
      response.json([1, 2]);
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new UserController();