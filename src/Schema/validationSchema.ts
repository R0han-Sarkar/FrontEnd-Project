import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(10).required("The Name field is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
  phone: Yup.string().min(10).required("The password field is required"),
  instaURL: Yup.string()
    .url()
    .transform((currentValue) => {
      const doesNotStartWithHttp =
        currentValue &&
        !(
          currentValue.startsWith("http://") ||
          currentValue.startsWith("https://")
        );

      if (doesNotStartWithHttp) {
        return `http://${currentValue}`;
      }
      return currentValue;
    }),
  youtubeURL: Yup.string()
    .url()
    .transform((currentValue) => {
      const doesNotStartWithHttp =
        currentValue &&
        !(
          currentValue.startsWith("http://") ||
          currentValue.startsWith("https://")
        );

      if (doesNotStartWithHttp) {
        return `http://${currentValue}`;
      }
      return currentValue;
    }),
});

export { validationSchema };
