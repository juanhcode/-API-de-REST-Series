import Joi from "joi"

const serieSchema = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    season: Joi.number().required(),
    gender: Joi.string().required(),
    id: Joi.string(),
})

export default serieSchema;