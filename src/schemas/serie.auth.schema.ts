import Joi from "joi"

const authSerieSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required(),
})

export default authSerieSchema;