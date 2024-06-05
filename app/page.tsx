import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Premium from "@/components/Premium";
import Profile from "@/components/Profile";
import Reviews from "@/components/Reviews";
import Trainer from "@/components/Trainer";
import Video from "@/components/Video";

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
        <Premium/>
        <Blogs/>
        <Reviews/>
        <Trainer/>
        <Footer/>
    </main>
  );
}
