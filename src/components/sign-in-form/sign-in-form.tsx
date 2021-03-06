import FormTextInput from "../form-text-input/form-text-input";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import { Button, Flex, Text } from "@chakra-ui/react";
import GoogleLoginButton from "@/components/google-login-button/google-login-button";
import { signInAuthUserWithEmailAndPassword } from "@/utils/firebase/firebase";
interface SignInParams {
  email: string;
  password: string;
}
/**
 * 邮箱密码登录
 */
const SignInForm = () => {
  /** 处理登录逻辑 */
  const handleSignIn = async (
    values: SignInParams,
    actions: FormikHelpers<SignInParams>
  ) => {
    const { email, password } = values;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // rest form
      actions.resetForm();
    } catch (error: any) {
      console.log(error);
    }
  };

  const initialValues: SignInParams = {
    email: "",
    password: "",
  };
  return (
    <>
      <Text fontSize="2xl">Already an account?</Text>
      <Text as="i">Sign in with your email and password</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string().email("邮箱格式不正确").required("邮箱不能为空"),
          password: Yup.string().required("密码不能为空"),
        })}
        onSubmit={(values, actions) => handleSignIn(values, actions)}
      >
        {(props: FormikProps<SignInParams>) => (
          <Form style={{ marginTop: "20px" }}>
            <FormTextInput
              label="Email"
              name="email"
              type="text"
            ></FormTextInput>
            <FormTextInput
              label="Password"
              name="password"
              type="password"
            ></FormTextInput>
            <Flex mt={4} gap={1}>
              <Button
                type="submit"
                // flex={1}
                isLoading={props.isSubmitting}
                loadingText={"处理中"}
              >
                Sign In
              </Button>
              <GoogleLoginButton />
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default SignInForm;
