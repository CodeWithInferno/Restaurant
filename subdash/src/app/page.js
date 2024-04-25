import React from 'react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
// import Items from '@/components/Items';

const LandingPage = () => (
  <div className="text-center bg-zinc-700" >
    <Header />
    <div className="flex">
      
      <Sidebar />
      {/* <Items /> */}
    </div>
  </div>
);

export default LandingPage;