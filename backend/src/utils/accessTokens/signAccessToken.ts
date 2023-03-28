import {sign,  Algorithm, JwtPayload } from "jsonwebtoken";

export const signAccessToken = (payload: JwtPayload, expiresIn: string) => {

  const privateKey: string = process.env.ACCESS_TOKEN_PRIVATE_KEY || "secret";
  const algorithm: Algorithm = "HS256"

  return sign(payload, privateKey, { algorithm, expiresIn });
}
