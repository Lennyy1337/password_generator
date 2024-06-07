"use client";
import { Slider } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [value, setValue] = React.useState<any>(16);
  const [password, setPassword] = React.useState<string>("");

  React.useEffect(() => {
    generatePassword();
  }, [value]);

  function generatePassword() {
    console.log(value, password);
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < value) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    setPassword(result);
  }

  function copyToClipboard(){
    toast.success("Password copied to clipboard!")
    navigator.clipboard.writeText(password)
  }
  return (
    <>
    <Toaster/>
    <main className="min-h-screen flex justify-between flex-col items-center w-screen">
      <div className="min-h-screen flex md:space-y-24 max-sm:space-y-12 flex-col items-center w-screen p-24">
        <Slider
          label="Password Length"
          step={1}
          maxValue={128}
          minValue={4}
          defaultValue={12}
          size="lg"
          className="w-xl h-xl text-3xl"
          onChange={setValue}
        />
        <div className="bg-gradient-to-tl from-gray-900 via-black to-gray-900 p-6 rounded-xl transition-all ease-in-out duration-200 shadow-xl hover:shadow-2xl shadow-gray-900">
          <h1 className="text-3xl break-all max-w-full xl:text-6xl cursor-pointer" onClick={copyToClipboard}>{password}</h1>
        </div>
      </div>
    </main>
    </>
  );
}
