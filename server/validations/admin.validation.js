const Joi = require("joi")

const admin = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        // profile: Joi.string().required()
      }),
}

module.exports={admin}