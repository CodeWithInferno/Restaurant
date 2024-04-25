// Sidebar.js
import React from 'react';
import { Button } from '@/components/ui/button';

const Sidebar = () => (
    <div className="bg-zinc-800 w-64 min-h-screen p-4">
        <h2 className="text-zinc-500  float-start">SubDash</h2>
        <Button className="w-full bg-zinc-800 text-left">Home</Button>
        <Button className="w-full bg-zinc-800 text-left">Home</Button>
        <Button className="w-full bg-zinc-800 text-left">Home</Button>
        <Button className="w-full bg-zinc-800 text-left">Home</Button>
    </div>
);

export default Sidebar;