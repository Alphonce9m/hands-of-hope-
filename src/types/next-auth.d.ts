import 'next-auth';
import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
      accessToken?: string;
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    id: string;
    role: string;
    accessToken?: string;
  }

  interface JWT {
    id: string;
    role: string;
    accessToken?: string;
  }
}