import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
	name: Yup.string().required("Full Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	phone: Yup.string()
		.matches(/^[0-9]{10}$/, "Enter valid 10-digit phone")
		.required("Phone is required"),
	password: Yup.string()
		.min(6, "Password must be 6 chars minimum")
		.required("Password is required"),
});
const SigninSchema = Yup.object().shape({
	username: Yup.string()
		.matches(/^[0-9]{10}$/, "Enter valid 10-digit phone")
		.required("Phone is required"),
	password: Yup.string()
		.min(6, "Password must be 6 chars minimum")
		.required("Password is required"),
});

export { SignupSchema, SigninSchema };
