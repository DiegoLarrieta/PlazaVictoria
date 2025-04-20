import HeroPrincipal from "../../components/Home/HeroPrincipal";
import Amenidades from "../../components/Home/Amenidades";
import InfoPlaza from "../../components/Home/InfoPlaza";
import PorQueInvertir from "../../components/Home/PorQueInvertir";
import CTAFinal from "../../components/Home/CTAFinal";

const Home = () => {
    return (
      <>
        <HeroPrincipal />
        <PorQueInvertir />
        <InfoPlaza />
        <Amenidades />
        <CTAFinal />
      </>
    );
  };
  
  export default Home;