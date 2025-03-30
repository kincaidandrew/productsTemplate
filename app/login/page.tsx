import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { signIn } from '@/lib/auth';
import LoginForm from '@/components/ui/login-form';
import AcmeLogo from '@/components/ui/acme-logo';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>

    // <div className="min-h-screen flex justify-center items-start md:items-center p-8">
    //   <Card className="w-full max-w-sm">
    //     <CardHeader>
    //       <CardTitle className="text-2xl">Login</CardTitle>
    //       <CardDescription>
    //         This demo uses GitHub for authentication.
    //       </CardDescription>
    //     </CardHeader>
    //     <CardFooter>
    //       <form
    //         action={async () => {
    //           'use server';
    //           await signIn('github', {
    //             redirectTo: '/'
    //           });
    //         }}
    //         className="w-full"
    //       >
    //         <Button className="w-full">Sign in with GitHub</Button>
    //       </form>
    //     </CardFooter>
    //   </Card>
    // </div>
  );
}
