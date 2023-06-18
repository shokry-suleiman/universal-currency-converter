import euro from "../../assets/icons/euro.svg";
import CurrencyCard from '../../components/currency-card.js'
function Home() {
  return (
    <div className="columns-2 w-screen h-screen gap-0">
      <div className="h-full bg-primary flex flex-col justify-start items-center">
        <img className="block mb-8 mt-[80px]" src={euro} alt="..." />
        <input id="number" type="number" value={23.50}  className="bg-primary	text-center text-white font-bold text-[80px] focus:outline-none"/>  
        <div className="h-[1px] bg-blue w-5/6"></div>
        <div className="text-blue text-[32px] mt-2">EUR</div>
      </div>
      <div className="h-full p-10 overflow-y-auto">
      {[...Array(10)].map((x, i) =>
            <CurrencyCard key={i} />
          )}
      
      </div>
    </div>
  );
}

export default Home;
