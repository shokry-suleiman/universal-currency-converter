import unitedState from "../assets/icons/united-states-of-america.png";

function CurrencyCard() {
    return (
        <div className="flex items-center shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] rounded-[7px] p-[24px] md:p-[36px] mb-[22px] lg:mb-[20px]">
        <div className="text-black mr-6 md:mr-8 text-[21px]">USD</div>
        <img
          className="border border-primary rounded-full w-[62px] md:w-[75px]"
          src={unitedState}
          alt="..."
        />
        <div className="text-black  ml-auto  text-[21px]">0.38</div>
      </div>
    );
  }
  
  export default CurrencyCard;
  