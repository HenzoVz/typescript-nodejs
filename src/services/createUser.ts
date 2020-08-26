/**
 * Para criar: name, email, password
 */

 interface TechObject {
   title: string;
   experience: number;
 }

 interface CreateUserData {
   name?: string; // name é opcional, '?' operador de opcional
   email: string;
   password: string;
   techs: Array<string | TechObject>;
 }

 // desestruturando a interface CreateUSerData dentro do createUSer
export default function createUser({ name = '', email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }
  
  return user;
}