import { Formik, Form, FormikProps, FormikHelpers } from "formik";
import { Button, Text } from "@chakra-ui/react";
import * as Yup from "yup";
import FormTextInput from "../form-text-input/form-text-input";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "@/utils/firebase/firebase";

interface SignUpParams {
  username: string;
  email: string;
  password: string;
  password2: string;
}
export default function SignUpForm() {
  const initialValues: SignUpParams = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  const handleSignUp = async (
    values: SignUpParams,
    actions: FormikHelpers<SignUpParams>
  ) => {
    const { username, email, password } = values;

    try {
      const { user } = (await createAuthUserWithEmailAndPassword(
        email,
        password
      )) || { undefined };

      // const {user} = createRes

      await createUserDocument(user!, { username });

      // resetform
      actions.resetForm();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <>
      <Text fontSize="2xl">Don't have an account?</Text>
      <Text as="i">Sign up with your email and password</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "用户名不能超过15个字符")
            .required("用户名不能为空"),
          email: Yup.string().email("邮箱格式错误").required("邮箱不能为空"),
          password: Yup.string()
            .min(6, "密码至少为6位")
            .required("密码不能为空"),
          password2: Yup.string()
            .min(6, "密码至少为6位")
            .oneOf([Yup.ref("password"), null], "两次输入的密码不一致"),
        })}
        onSubmit={(values, actions) => handleSignUp(values, actions)}
      >
        {(props: FormikProps<SignUpParams>) => (
          <Form style={{ marginTop: "20px" }}>
            <FormTextInput
              label="User Name"
              name="username"
              type="text"
            ></FormTextInput>
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
            <FormTextInput
              label="Confirm Password"
              name="password2"
              type="password"
            ></FormTextInput>
            <Button
              type="submit"
              // borderRadius={0}
              w={"100%"}
              mt={4}
              isLoading={props.isSubmitting}
              loadingText={"处理中"}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}