import { DocumentDefinition } from 'mongoose'
import { UserModel, UserDocument } from './user.model'
import { getErrorMessage } from '../helpers'

export const createUser = async (input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | "comparePassword">>) => {
  try {
    return await UserModel.create(input)
  }
  catch (error) {
    throw new Error(getErrorMessage(error))
  }
}
