import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import MessageSection from "./sections/MassageSection"

function App() {
  

  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <MessageSection />
        <div className="h-100"></div>
      </main>
    </>
  )
}

export default App
