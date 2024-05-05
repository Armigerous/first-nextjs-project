import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
        <div className="w-32 text-black md:w-36">
        <strong>Example Login:</strong>
        </div>
        <div className="w-50 text-black md:w-70">
        <strong>email:</strong> user@nextmail.com
        </div>
        <div className="w-50 text-black md:w-40">
        <strong> password: </strong> 123456
        </div>


      </div>

    </main>
  );
}