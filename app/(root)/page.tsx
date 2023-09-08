
import ContinueButton from '@/components/ContinueButton';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import NewProjectModal from '@/components/NewProjectModal';

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');

  }

  return (
    <>
      <NewProjectModal />
      <div className="m-4 flex flex-col justify-center items-center w-full">
        <div className=" flex flex-col items-center w-2/3 bg-bgsecondary p-12 space-y-12">
          <img src="/banner.png" alt="banner" className="w-full rounded-md" />
          <div className="text-primary text-left w-full space-y-2">
            <h2 className="text-xl font-bold">Project Time Tracker</h2>
            <div className="text-sm space-y-4">
              <p>Track how much time you take to complete your projects.</p>
              <p>Click the "Continue" button below to start a new project or select an existing one.</p>
              <p>Found a bug? Report it on GitHub. Click <a href="https://github.com/vilelalabs/project-time-tracker" target="_blank" className="text-highlight">here</a>!</p>
              <p>Thank you for using our system.</p>
              <hr className="border-bgmenu border-1" />
            </div>
          </div>
          <div className="flex w-full justify-end">
            <ContinueButton />
          </div>
        </div>
      </div >
    </>
  )
}
