import SignInButton from "@/components/SignInButton";

const AuthPage = () => {
    return (
        <div className="flex flex-col m-4">
            <div>
                <h1 className="text-highlight text font-bold ">
                    Project Time Tracker</h1>
            </div>
            <div className=" flex flex-col min-h-screen justify-center items-center">
                <div className=" flex flex-col items-center w-2/3 bg-bgsecondary p-12 space-y-8">
                    <img src="/banner.png" alt="banner" className="w-full rounded-md" />
                    <div className="text-primary text-center w-full space-y-2">
                        <h2 className="text-2xl font-bold">Signin / Sign up</h2>
                        <p className="text-sm">Use your Google Account to Sign in or Sign up.</p>
                    </div>
                    <SignInButton />

                </div>
            </div>

        </div >
    );
}

export default AuthPage;