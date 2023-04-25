import Joi from 'joi';

const user = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default {
  user,
  login,
};