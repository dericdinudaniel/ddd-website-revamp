import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
