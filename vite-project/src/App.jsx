import "./App.css";
import { Footer, Header } from "./components/ProductCard";
import { ProductList } from "./components/ProductList";
import productos from "./data/dataproducts";

function App() {
  return (
    <>
    <Header/>
      <ProductList productos={productos} />
      <Footer/>
    </>
  );
}
export default App;
