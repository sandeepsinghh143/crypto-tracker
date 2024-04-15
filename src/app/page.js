import LeftMain from "@/components/landing/LeftMain";
import RightMain from "@/components/landing/RightMain";


export default function Home() {
  return (
    <main className="flex items-center flex-col md:flex-row justify-between md:items-start px-12 py-12">
      <LeftMain/>
      <RightMain/>
    </main>
  );
}
