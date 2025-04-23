import Hero from "../Components/Hero/Hero.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewSLetter from "../Components/NewsLetter/NewSLetter.jsx";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewSLetter />
    </div>
  );
};

export default Shop;
