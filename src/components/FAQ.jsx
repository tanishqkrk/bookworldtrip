"use client";
import { useRef, useState } from "react";

export default function FAQ() {
  const [data, setData] = useState([
    {
      q: "What is an E-ticket?",
      a: `E-tickets, are offered by many major airlines, and allow you to travel without a paper ticket, eliminating the worry of leaving your tickets behind. OneTravel.com offers e-tickets when they are available.
      Bring government issued photo identification (such as a driver's license or passport) to the airport. E-ticketed passengers must have a printed boarding pass in order to proceed directly through security for check in at the gate. Customers with check-in baggage or E-tickets who do not have printed boarding passes must go to the
      ticket counter prior to going through security checkpoints.`,
    },
    {
      q: "How do I cancel this reservation?",
      a: `Most airline tickets issued are non-refundable, and non- transferable. Name changes are not permitted.
      However, you may be able to exchange your tickets for different dates. Penalty fees apply and not all tickets are changeable. Please call our exchange department for details.`,
    },
    {
      q: "Baggage and Check-in policy?",
      a: `When there are two or more airlines involved for connecting flights or if you have a long layover in transit (over six hours) then you may have to reclaim your bags at the connecting airport and check-in again to continue your journey. Transit visa requirements applies depending on your nationality. You are also advised that in these cases if you have excess baggage, you will have to pay any excess baggage fee assessed by each airline. Most airlines now charge baggage fees even for the first bag checked-In. Baggage feed depends on the size and weight of the bag and are per checked bag. These fees are to be paid directly to airline upon using such service. You must contact the airline directly for the latest fees on check baggage and policy as it relates to baggage/re-check-in.`,
    },
    {
      q: "How do I change my flight?",
      a: `Airlines may change flight schedules or cancel the flight due to technical reasons or to meet their operational needs. Weather conditions may also cause such changes or cancellation. In such cases the airline will make every attempt to re-protect the passengers for an alternate date or flight. Airlines may offer credit or refund if they fail to provide an alternative under their applicable rules.
      Airlines may change schedules at the last minute or without any prior notice. Passengers are solely responsible to reconfirm their flight status with the airlines 24 to 72 hours prior to departure. Passengers should check their email/phone on file with us before and during their travel as they may receive important travel information including schedule change and more.`,
    },
  ]);

  return (
    <div className="my-16 px-16 space-y-8 max-md:px-3">
      <div className="text-3xl font-semibold">FAQs</div>
      <div className="flex border-t-2 md:flex-row flex-col-reverse border-yellow">
        <div className="flex flex-col w-full  h-fit  justify-between divide-y-2 divide-yellow">
          {data?.map((i) => {
            return <Question key={i.q} q={i.q} a={i.a} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Question({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => {
        console.log("aaga");
        setOpen((x) => !x);
      }}
      className={`${!open ? "bg-white" : "bg-gray-200"}
      
      px-16 h-fit flex flex-col  justify-start relative transition-all duration-500 py-8 gap-6 max-lg:px-2`}
    >
      <div className="font-bold  text-xl flex justify-between items-center h-6 max-lg:text-base">
        <div className={`${!open ? "text-theme " : "text-background "} h-full`}>
          {q}
        </div>
        <button className="text-4xl  absolute right-3 top-1/2 -translate-y-1/2 text-white">
          +
        </button>
      </div>
      <div
        style={{
          height: open ? "10em" : "",
        }}
        className="h-0 max-md:text-sm font-semibold text-xl overflow-hidden transition-all duration-500 text-background"
      >
        {a}
      </div>
    </div>
  );
}
