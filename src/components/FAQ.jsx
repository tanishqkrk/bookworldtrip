"use client";
import { useRef, useState } from "react";

export default function FAQ() {
  const [data, setData] = useState([
    {
      q: "What type of properties do you specialize in?",
      a: "We specialize in premium A & B category apartments in Bangalore, catering to discerning buyers seeking luxury living spaces.",
    },
    {
      q: "Do you offer any assistance with property financing?",
      a: "Absolutely! We partner with leading financial institutions to facilitate mortgage applications and offer expert investment advice.",
    },
    {
      q: "Can you arrange viewings of the listed properties?",
      a: "Yes, we certainly can! We'll schedule exclusive site visits and personally guide you through each property, ensuring a firsthand experience.",
    },
    {
      q: "What happens after I select a property?",
      a: "Our team will handle everything from expert negotiation to legal paperwork and the final closing process, ensuring a smooth and stress-free experience.",
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
      className={`${!open ? "bg-white" : "bg-gray-300"}
      
      px-16 h-fit flex flex-col  justify-start relative transition-all duration-500 py-8 gap-6 max-lg:px-2`}
    >
      <div
        onClick={() => {
          console.log("aaga");
          setOpen((x) => !x);
        }}
        className="font-bold  text-xl flex justify-between items-center h-18 max-lg:text-base"
      >
        <div className={`${!open ? "text-theme " : "text-background "} h-full`}>
          {q}
        </div>
        <button
          onClick={() => {
            console.log("aaga");
            setOpen((x) => !x);
          }}
          className="text-4xl  absolute right-3 top-1/2 -translate-y-1/2 text-white"
        >
          +
        </button>
      </div>
      <div
        style={{
          height: open ? "6em" : "",
        }}
        className="h-0 max-md:text-sm font-semibold text-xl overflow-hidden transition-all duration-500 text-background"
      >
        {a}
      </div>
    </div>
  );
}
