"use client";
import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-4">
      <HashLoader color="#ffcf00" loading size={100} />
      <p className="text-gray-600 text-lg">Loading product...</p>
    </div>
  );
}
