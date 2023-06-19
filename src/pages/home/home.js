import euro from "../../assets/icons/euro.svg";
import CurrencyCard from '../../components/currency-card.js'
function Home() {
  return (
    <div className="lg:columns-2 w-screen h-screen gap-0">
      <div className="h-[360px] md:h-[420px] lg:h-full bg-primary flex flex-col justify-start items-center sticky top-0 lg:static max-w-full">
        <img className="block mb-[14px] lg:mb-8 mt-[75px] md:mt-[60px] lg:mt-[80px]  w-[100px] md:w-auto" src={euro} alt="..." />
        <input id="number" type="number" value={23.50}  className="bg-primary	text-center text-white font-bold text-[80px] focus:outline-none max-w-full mb-[-15px] md:mb-0"/>  
        <div className="h-[1px] bg-blue w-5/6"></div>
        <div className="text-blue text-[22px] md:text-[32px] mt-2">EUR</div>
      </div>
      <div className="h-full p-8 lg:p-10 overflow-y-auto">
      {[...Array(10)].map((x, i) =>
            <CurrencyCard key={i} />
          )}
      
      </div>
    </div>
  );
}

export default Home;
