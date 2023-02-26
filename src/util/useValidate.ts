import { emailValidator, fullNameValidator, passwordValidator } from './validators';
import type { AuthFormErrors } from '../types/Auth.types';

const useValidate = (email: string, password: string, fullName?: string) => {
	let isValid = true;
	const hasErrors: AuthFormErrors = {
		email: null,
		password: null,
		fullName: null
	};

	// validate email field
	if (!emailValidator(email)) {
		isValid = false;
		hasErrors.email = 'Please enter a valid email address';
	}
	if (!passwordValidator(password)) {
		isValid = false;
		hasErrors.password =
			'must contain uppercase and lowercase letter, at least one number and be of length 8';
	}
	if (!fullNameValidator(fullName)) {
		isValid = false;
		hasErrors.fullName = 'Please enter a valid fullName containing at least 3 characters';
	}

	return { isValid, hasErrors };
};

export default useValidate;
