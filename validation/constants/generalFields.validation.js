import Joi from "joi"
import mongoose from "mongoose"

export const generalFields = Object.freeze({
    id: Joi.custom((value, helper) => {
        return !mongoose.Types.ObjectId.isValid(value) ? helper.error().message('invalid id') : true
    }),
    email: Joi.string().email({tlds: {allow: ['net', 'com', 'org']}})
})