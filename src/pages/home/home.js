import euro from "../../assets/icons/euro.svg";
import unitedState from "../../assets/icons/united-states-of-america.png";
function Home() {
  return (
    <div className="columns-2 w-screen h-screen gap-0">
      <div className="h-full bg-primary">
        <img className="block" src={euro} alt="..." />
        <input id="number" type="number" value="42" />
        <hr />
        <div>EUR</div>
      </div>
      <div className="h-full p-6 ">
        <div className="flex items-center shadow-lg shadow-black rounded-lg p-4">
          <div className="text-black">USD</div>
          <img
            className="border border-primary rounded-full w-[50px]"
            src={unitedState}
            alt="..."
          />
          <div className="text-black justify-self-end">0.38</div>
        </div>
        <div className="flex items-center shadow-lg shadow-black rounded-lg p-4">
          <div className="text-black">USD</div>
          <img
            className="border border-primary rounded-full w-[50px]"
            src={unitedState}
            alt="..."
          />
          <div className="text-black justify-self-end">0.38</div>
        </div>
        <div className="flex items-center shadow-lg shadow-black rounded-lg p-4">
          <div className="text-black">USD</div>
          <img
            className="border border-primary rounded-full w-[50px]"
            src={unitedState}
            alt="..."
          />
          <div className="text-black justify-self-end">0.38</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
