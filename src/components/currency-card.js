import unitedState from "../assets/icons/united-states-of-america.png";

function CurrencyCard() {
    return (
        <div className="flex items-center shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] rounded-[7px] p-[36px] mb-[20px]">
        <div className="text-black mr-8">USD</div>
        <img
          className="border border-primary rounded-full w-[75px]"
          src={unitedState}
          alt="..."
        />
        <div className="text-black  ml-auto  text-[16px]">0.38</div>
      </div>
    );
  }
  
  export default CurrencyCard;
  