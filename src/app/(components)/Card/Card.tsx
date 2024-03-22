import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <section className="flex justify-center py-20">
      <div className="flex flex-wrap gap-10">
        <div className="flex justify-center items-center">
          <div className="w-fit shadow-xl rounded-2xl p-10 border">
            <div className="flex justify-between gap-x-10 items-center">
              <img
                src="https://assets.wellreceived.com/wellreceived/website/images/desktop/logos/wellreceived-logo.svg"
                alt="Well received logo"
                width="200"
                height="24"
                className="rounded-2xl h-[24px] max-w-[200px]"
              />
              <Link
                href="/signatures/wr"
                className="px-8 py-4 w-full flex-1 border bg-green-700 text-white border-slate-100 rounded-lg hover:shadow-2xl hover:bg-slate-100 hover:text-green-700 hover:border-green-700 shadow-lg"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-slate-900 w-fit shadow-xl rounded-2xl p-10 border">
            <div className="flex justify-between gap-x-10 items-center">
              <img
                src="https://assets.serviceforge.com/serviceforge/ca/mailtemplate/images/sf-logo-white.png"
                alt="Well received logo"
                width="200"
                height="24"
                className="rounded-2xl h-[24px] max-w-[200px] object-contain"
              />
              <Link
                href="/signatures/sf"
                className="px-8 py-4 w-full flex-1 border bg-slate-700 text-white border-slate-100 rounded-lg hover:shadow-2xl hover:bg-slate-100 hover:text-slate-700 hover:border-slate-700 shadow-lg"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
