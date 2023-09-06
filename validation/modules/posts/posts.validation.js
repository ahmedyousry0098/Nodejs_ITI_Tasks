import Joi from "joi";
import { generalFields } from "../../constants/generalFields.validation.js";

export const addPostSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30),
    price: Joi.number().positive().required(),
    createdBy: generalFields.id.required()
}).required()

export const updatePostSchema = Joi.object({
    _id: generalFields.id.required(),
    title: Joi.string().min(3).max(30),
    description: Joi.string().min(3).max(30),
    price: Joi.number().positive(),
    createdByEmail: generalFields.email.required()
}).required()

export const deletePostSchema = Joi.object({
    _id: generalFields.id.required(),
    createdByEmail: generalFields.email.required()
}).required()

export const getPostSchema = Joi.object({
    _id: generalFields.id.required()
}).required()
