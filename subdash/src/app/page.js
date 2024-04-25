import React from 'react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Tables from '@/components/Tables';

const LandingPage = () => (
  <div className="text-center bg-zinc-700" >
    <Header />
    <div className="flex">
      
      <Sidebar />
      <Tables />
    </div>
  </div>
);

export default LandingPage;