import { UserModel } from './user.model';

export const validateUser = async ({ email, password }: { email: string, password: string }) => {
  // Check if email is in database
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  // Check if password is correct
  const passwordsMatch = await user.comparePassword(password);

  if (!passwordsMatch) {
    return false;
  }

  // Return user
  return user;
}

