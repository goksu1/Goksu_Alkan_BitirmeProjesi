export type ChangePasswordFormProps = {
  onChangePassword: (values: ChangePasswordFormValuesProps) => void;
};

export type ChangePasswordFormValuesProps = {
  username: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
};
