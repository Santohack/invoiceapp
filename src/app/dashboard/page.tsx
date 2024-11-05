import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

const page = () => {
  return (
    <main className="max-w-7xl mx-auto gap-6 flex flex-col justify-center h-full py-16  p-5 items-center">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-4xl font-bold"> InvocieApp</h1>

        <p>
          <Button asChild className=" inline-flex" variant="outline">
            <Link href="/invoices/new" >
              {" "}
              <CirclePlus size={24} />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-3">Date</TableHead>
            <TableHead className="p-3">Customer</TableHead>
            <TableHead className="p-3">Email</TableHead>
            <TableHead className="p-3">Status</TableHead>
            <TableHead className="text-right p-3">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <span className="font-bold p-3">01/23/2020</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="font-bold p-3">Ssantohak</span>
            </TableCell>
            <TableCell className="p-3">h6Tl2@example.com</TableCell>
            <TableCell className="p-3">
              {" "}
              <Badge variant="default" className=" rounded-full bg-primary">
                Badge
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              {" "}
              <span className="font-bold p-3">$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
};

export default page;
