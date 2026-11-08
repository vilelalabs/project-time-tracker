import Link from "next/link";
import SignInButton from "@/components/SignInButton";

const AuthPage = () => {
    return (
        <div className="flex flex-col m-4">
            <div>
                <h1 className="text-highlight text font-bold ">
                    Project Time Tracker</h1>
            </div>
            <div className=" flex flex-col min-h-screen justify-center items-center">
                <div className=" flex flex-col items-center w-full md:w-2/3 bg-bgsecondary p-6 md:p-12 space-y-8">
                    <img src="/banner.png" alt="banner" className="w-full rounded-md" />
                    <div className="text-primary text-center w-full space-y-2">
                        <h2 className="text-2xl font-bold">Signin / Sign up</h2>
                        <p className="text-sm">Use your Google Account to Sign in or Sign up.</p>
                    </div>
                    <SignInButton />
                    <p className="text-xs text-center text-zinc-400 leading-relaxed max-w-sm">
                        By signing in, you confirm that you have read our{" "}
                        <Link href="/privacy" className="text-highlight underline hover:text-highlighthover">Privacy Policy</Link>.
                        We only use essential cookies to keep you signed in.
                    </p>

                </div>
            </div>

        </div >
    );
}

export default AuthPage;