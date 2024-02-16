import Joi from "joi";

export const eventAttendeeValidator = (eventAttendee) => {
  const eventAttendeeValidatorSchema = Joi.object({
    EventID: Joi.number().integer().required(),
    AttendeeID: Joi.number().required(),
  });

  return eventAttendeeValidatorSchema.validate(eventAttendee);
};
