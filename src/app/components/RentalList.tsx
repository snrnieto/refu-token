import { RentalCard } from "@/components/RentalCard";
import { Rental } from "@/interfaces/rentalsInterfaces";
import React from "react";

interface RentalListProps {
  rentalList?: Rental[];
}
export const RentalList = ({ rentalList }: RentalListProps) => {
  if (!rentalList) {
    return "Cargando";
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center place-items-center gap-4 mt-4">
      {rentalList.map((rental) => (
        <RentalCard key={rental._id} property={rental} />
      ))}
    </div>
  );
};
