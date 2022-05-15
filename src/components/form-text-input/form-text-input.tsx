import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";
import { FC } from "react";
import styled from "@emotion/styled";

interface FormTextInputProps {
  label: string;
}

const FormTextInput: FC<FormTextInputProps & FieldHookConfig<"">> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]

  const ErrorSpan = styled(FormErrorMessage)`
    margin-top: 0 !important;
    position: absolute;
    right: 10px;
    top: 44px;
  `;
  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Input {...field} {...(props as InputProps)} />
      <ErrorSpan>{meta.error}</ErrorSpan>
    </FormControl>
  );
};
export default FormTextInput;
