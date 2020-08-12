"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _SessionsControllers = _interopRequireDefault(require("../controllers/SessionsControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionsController = new _SessionsControllers.default();
const sessionsRouter = (0, _express.Router)();
sessionsRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required()
  }
}), sessionsController.create);
var _default = sessionsRouter;
exports.default = _default;