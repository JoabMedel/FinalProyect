import joi from "joi";
import spanishJoi from "../utils/spanish-joi-messages";

export const userSchema = joi.object({
    firstName: joi.string().required().label("nombre").messages(spanishJoi),
    lastName: joi.string().required().messages(spanishJoi),
    email: joi.string().email().required().messages(spanishJoi),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(spanishJoi),
    repeat_password: joi.ref('password')
});
export const schemaUpdatePassword = joi.object({
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(spanishJoi),
});

export const schemaLogin = joi.object({
    email: joi.string().email().required().messages(spanishJoi),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(spanishJoi),
});

export const schemeRessetPassword = joi.object({
    email: joi.string().email().required().messages(spanishJoi)
});

export const schemeRol = joi.object({
    name: joi.string().required().label("nombre").messages(spanishJoi)
});

export const schemeActors = joi.object({
    name: joi.string().required().label("nombre").messages(spanishJoi),
    uid:joi.number().integer()
});
export const schemeLanguages = joi.object({
    name: joi.string().required().label("nombre").messages(spanishJoi)
});
export const schemecontent_directors = joi.object({
    director_id: joi.number().required().messages(spanishJoi),
    content_id: joi.number().required().messages(spanishJoi)
});
export const schemecontent_ratings = joi.object({
    content_type_id: joi.number().required().messages(spanishJoi),
    name: joi.string().required().label("nombre").messages(spanishJoi),
    description: joi.string().required().label("nombre").messages(spanishJoi)

});

export const schemeAddRolUser = joi.object({
    userId: joi.number().integer(),
    roleId: joi.number().integer()
});

export const schemeUpdatRolUser = joi.object({
    userId: joi.number().integer(),
    roleId: joi.number().integer()
});

export const schemeContentActor = joi.object({
    actor_id: joi.number().integer(),
    content_id: joi.number().integer()
});

export const schemeContentGenre = joi.object({
    genre_id: joi.number().integer(),
    content_id: joi.number().integer()
});

export const schemeContentType = joi.object({
    name: joi.string().required().label("nombre").messages(spanishJoi)
});

export const schemeDirectors = joi.object({
    name: joi.string().required().label("nombre").messages(spanishJoi)
});
 
export const schemeGenre = joi.object({
    name: joi.string().required().label("nombre").messages(spanishJoi)
});


export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        }catch (err) {
            console.log(err.details[0].context);
            res.status(400).json({
                message: err.message
            });
        }
    }
}