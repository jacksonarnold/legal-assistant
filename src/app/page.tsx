"use client";
import React from "react";
import { Button } from "@nextui-org/button";

export default function Home() {
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return;
        console.log(e.target.files);
    }

    function handleClick() {
        console.log("clicked");
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center space-y-2 mb-4">
                <h1 className="text-3xl font-bold mb-4">
                    Noncompete Summary Generator
                </h1>
                <p className="text-gray-500 md:mx-auto dark:text-gray-400">
                    Upload a file to generate a summary of its contents.
                </p>
            </div>
            <div className="flex items-center justify-center mt-2 ml-5">
                <input type="file" id="file" onChange={handleFileChange} />
            </div>
            <Button className="mt-10" onClick={handleClick}>
                Generate Summary
            </Button>
        </div>
    );
}
