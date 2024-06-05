import About from "@/components/About";
import Choose from "@/components/Choose";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between overflow-hidden">
      <div className="flex w-full flex-col items-center justify-between">
        <Hero/>
      </div>
        <Choose/>
        <About/>
        <Profile/>
        <Journey/>
        <Video/>
    </main>
  );
}
