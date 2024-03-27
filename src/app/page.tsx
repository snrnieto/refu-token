"use client";
import { Rental } from "@/interfaces/rentalsInterfaces";
import { getRentals } from "@/services/rentals";
import { useEffect, useState } from "react";
import { RentalList } from "./components/RentalList";

export default function Home() {
  const [rentals, setRentals] = useState<Rental[]>();
  useEffect(() => {
    getRentals().then((res) => {
      setRentals(res.data);
    });
  }, []);

  return (
    <main>
      <h1 className="text-xl font-bold mt-10">Properties</h1>
      <RentalList rentalList={rentals} />
    </main>
  );
}
