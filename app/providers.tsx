"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; // Fix the casing of the import statement
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  );
}
