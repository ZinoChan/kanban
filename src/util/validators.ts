function emailValidator(value: string) {
	return (
		(value &&
			!!value.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)) ||
		false
	);
}

function fullNameValidator(value: string | null | undefined) {
	return (value !== undefined && value !== null && value !== '' && value.length > 3) || false;
}

function passwordValidator(password: string): boolean {
	const minPasswordLength = 8; // Minimum password length
	const hasUppercase = /[A-Z]/.test(password); // Password contains uppercase letter(s)
	const hasLowercase = /[a-z]/.test(password); // Password contains lowercase letter(s)
	const hasNumber = /\d/.test(password); // Password contains number(s)

	// Check if the password meets all the validation rules
	return password.length >= minPasswordLength && hasUppercase && hasLowercase && hasNumber;
}

export { emailValidator, fullNameValidator, passwordValidator };
