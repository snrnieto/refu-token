/* eslint-disable @next/next/no-img-element */
import { Rental } from "@/interfaces/rentalsInterfaces";
import React, { useState } from "react";

interface RentalCardProps {
  property: Rental;
}
export const RentalCard = ({ property }: RentalCardProps) => {
  const [openLongDesc, setOpenLongDesc] = useState(false);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl bg-gray-50">
      <img
        className={`w-full object-cover h-full duration-500 ${
          openLongDesc ? "max-h-24" : "max-h-56"
        }`}
        src={property.picture}
        alt="Property Image"
      />
      <div className="px-6 py-4">
        <div className="mb-2">
          <h2 className="text-xl font-bold text-gray-900">Beautiful House</h2>
          <div className="relative text-gray-600 py-2">
            <p className="">
              {openLongDesc ? property.longDesc : property.shortDesc}
            </p>
            <span
              onClick={() => setOpenLongDesc(!openLongDesc)}
              className="hover:cursor-pointer font-extrabold"
            >
              ...
            </span>
          </div>

          <div className="flex items-center">
            <div className="mr-2 rounded-full bg-blue-600 py-1 px-2 text-xs font-medium text-white">
              {property.name}
            </div>
            <div className="rounded-full bg-yellow-500 py-1 px-2 text-xs font-medium text-white">
              {property.progress}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/windows/24/null/bedroom.png"
              alt=""
            />
            <p className="ml-2 text-sm font-medium text-gray-700">
              {property.category} Bedrooms
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png"
              alt=""
            />
            <p className="ml-2 text-sm font-medium text-gray-700">
              2 Bathrooms
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png"
              alt=""
            />
            <p className="ml-2 text-sm font-medium text-gray-700">120 sqm</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-3xl font-extrabold text-blue-800">
            {/* convert to local money */}
            {new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "EUR",
              currencyDisplay: "symbol",
              maximumFractionDigits: 0,
            }).format(property.goal)}
          </p>
        </div>
      </div>
      {/* <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Agent Image"
            className="mr-2 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Agent Name</p>
            <p className="text-xs text-gray-600">Real Estate Agent</p>
          </div>
        </div>
        <div className="flex">
          <a
            href="tel:+1234567890"
            className="mr-2 rounded-full bg-gray-300 p-1 text-gray-700 hover:text-gray-800"
          >
            <img
              src="https://img.icons8.com/color/24/null/ringer-volume.png"
              alt=""
            />
          </a>
          <a
            href="https://wa.me/1234567890"
            className="rounded-full bg-green-500 p-1 text-white hover:bg-green-600"
          >
            <img
              src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-WhatsApp-social-media-those-icons-lineal-color-those-icons.png"
              alt=""
            />
          </a>
        </div>
      </div> */}
    </div>
  );
};
