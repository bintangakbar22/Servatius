import * as yup from 'yup';
export const dataValidation = yup.object().shape({
    name: yup.string().required('Name is Required!'),
    email: yup
      .string()
      .required("Email/Phone Number is required")
        .test('test-name', 'Enter Valid Phone/Email', 
        function(value) {
            const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            const phoneRegex = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;
            let isValidEmail = emailRegex.test(value);
            let isValidPhone = phoneRegex.test(value);
            if (!isValidEmail && !isValidPhone ){
            return false;
            }
            return true;
        }),
    showPassword: yup.boolean(),
    password: yup.string().when('showPassword', {
      is: true,
      then: yup
        .string()
        .required('Password is Required!')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase and One Number!',
        ),
    }),
    password_confirmation: yup.string().when('showPassword2', {
      is: true,
      then: yup
        .string()
        .required('Confirmation Password is Required!')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase and One Number!',
        ),
    }),
  });