// import jwt from 'jsonwebtoken';;

export interface JWKKey {
  name: string;
  id: string;
}

export default function createJWK(name: string): Promise<JWKKey> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name, id: Math.random().toString(36).slice(-8) }), 1000);
  });
  
}
