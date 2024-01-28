import GlobalStyled from "./MainStyled.css";
import NavMenu from "./components/Nav/NavMenu";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MenuItem from "./components/Menu/MenuItem";
import ProductGrid from "./pages/Products/ProductGrid";
import { objCakes, objCandy } from "./pages/Products/data/datasProducts";
import Section from "./pages/Sections/Section";
function App() {



  return (
    <main>
        <GlobalStyled/>
        <NavMenu/>
        <Header/>
        <Hero/>
        <MenuItem/>
        <div>
          <ProductGrid {...objCakes}/>  
        </div>
        <Section/>
        <div>
          <ProductGrid {...objCandy}/>  
        </div>
    </main>
  );
}

export default App;
