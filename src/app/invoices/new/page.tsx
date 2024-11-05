"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import { createInvoice } from "./actions";

export default  function page() {
  return (
    <main className="max-w-7xl  mx-auto gap-6 flex flex-col py-16 h-full  ">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-4xl font-bold"> Create Invoice</h1>
      </div>

      <form action={createInvoice} className="flex flex-col gap-6 max-w-xs">
        <div className="flex flex-col gap-1">
          <Label htmlFor="name" className=" font-semibold text-sm ">
            Billing Name
          </Label>
          <Input id="name" name="name" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className=" font-semibold text-sm ">
            Billing Email
          </Label>
          <Input id="email" name="email" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="value" className=" font-semibold text-sm ">
            Value
          </Label>
          <Input id="value" name="value" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="description" className=" font-semibold text-sm ">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            className="resize-none"
          />
        </div>
        <Button type="submit" className="w-full py-3">
          Submit
        </Button>
      </form>
    </main>
  );
}
