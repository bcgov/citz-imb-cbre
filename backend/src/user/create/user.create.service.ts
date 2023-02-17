import { UserModel } from '../user.model';
import { UserDocument } from '../user.type';
import { DocumentDefinition } from 'mongoose';
import { getErrorMessage } from '../../utils';

export const createUser = async (input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) => {

  try {
    const user = await UserModel.create(input)
    console.log(user)

    return user
  } catch (error) {
    throw new Error(getErrorMessage(error))
  }


}
