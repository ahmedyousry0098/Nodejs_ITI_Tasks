import Joi from "joi";
import { generalFields } from "../../constants/generalFields.validation.js";

export const registerSchema = Joi.object({
    name: Joi.string().required(), 
    email: generalFields.email.required(), 
    password: Joi.string().required(), 
    age: Joi.number().positive().min(12).max(75)
}).required()

export const loginSchema = Joi.object({
    email: generalFields.email.required(), 
    password: Joi.string().required(), 
}).required()

export const updateUserSchema = Joi.object({
    name: Joi.string(), 
    email: generalFields.email, 
    password: Joi.string(), 
    age: Joi.number().positive().min(12).max(75)
}).required()

export const deleteUserSchema = Joi.object({
    email: generalFields.email, 
}).required()

export const getSpecialUserNameAndAgeSchema = Joi.object({
    x: Joi.number().min(12).max(75).required(),
    y: Joi.string().min(1).max(20).required()
}).required()

export const findUserWithNameSchema = Joi.object({
    x: Joi.string().min(1).max(20).required()
}).required()


