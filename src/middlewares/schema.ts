import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const orderSchema = Joi.object({
  productsIds: Joi.array().items(
    Joi.number().min(1),
  ).required(),
});

export default {
  userSchema,
  loginSchema,
  productSchema,
  orderSchema,
};