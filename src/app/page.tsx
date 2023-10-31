import Submissions from '@/components/Submissions/Submissions';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>InterView</h1>
      <Submissions />
      {/* <Dialog>
        <DialogTrigger>OPEN</DialogTrigger>
      </Dialog> */}
    </main>
  );
}
