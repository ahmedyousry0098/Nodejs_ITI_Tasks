import Joi from "joi";

export const validate = (schema) => {
    return (req, res, next) => {
        const keys = {...req.body, ...req.params, ...req.query}
        console.log(keys);
        const {error} = schema.validate(keys, {abortEarly: false})
        if (error) {
            return next(error)
        }
        return next()
    }
}