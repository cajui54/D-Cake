import GlobalStyled from "./MainStyled.css";
import NavMenu from "./components/Nav/NavMenu";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MenuItem from "./components/Menu/MenuItem";
import AboutMe from "./pages/About/AboutMe";
import CandySection from "./pages/CandySection/CandySection";
import ProductGrid from "./pages/Products/ProductGrid";
import { cakeDatas } from './assets/data/dataCakes';

function App() {
  const objCakes = {
    titles:['Bolos', 'Decorados & Artesanal'],
    paragraph: 'Trabalhamos com diversos sabores e Decorações a gosto do cliente!',
    datas: cakeDatas,
  }

  return (
    <main>
        <GlobalStyled/>
        <NavMenu/>
        <Header/>
        <Hero/>
        <MenuItem/>
        <ProductGrid {...objCakes}/>
    </main>
  );
}

export default App;
