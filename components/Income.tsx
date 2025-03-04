import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DatePickerWithRange } from "./Date-picker";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import AddedIncome from "./Added-Income";

function Income() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Income</h2>
        <AddedIncome />
      </div>
      <div className="flex justify-between py-2 gap-2">
        <Input type="text" placeholder="Search expenses" />
        <Select>
          <SelectTrigger>
            <SelectValue>Filter by</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Standard Income">Standard Income</SelectItem>
            <SelectItem value="Irregular Income">
              Irregular Income
            </SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange />
      </div>
      <div className=" mt-4 grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Salary</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$25000.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Standard Income</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Business</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$200.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Standard Income</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Investments</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$300.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Irregular Income</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rent</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$100.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Standard Income</CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div className="justify-center mt-4"></div>
    </div>
  );
}

export default Income;
