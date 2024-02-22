import jwt from 'jsonwebtoken'

export function encryptData(data:string) {
    const secret:string= process.env.NEXT_APP_JWT || ""
    const data_encrypted=jwt.sign({
        data,
      },secret, { expiresIn:'' });

      return data_encrypted;


}

// export function decryptData(key:string) {



// }
