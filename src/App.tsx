import { Layout } from "./components/Layout"
import { AbountUs } from "./components/sections/AbountUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero"
import { Investimento } from "./components/sections/Investimento";
import { Services } from "./components/sections/Services";


function App() {


  return (
    <Layout title="EdgeAI">
    <Hero />
    <Brands/>
    <Services/>
    <AbountUs/>
    <Investimento/>
    <CTA/>
    </Layout>
  );
}

export default App
