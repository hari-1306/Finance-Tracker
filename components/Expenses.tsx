import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { DatePickerWithRange } from "./Date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Component from "./Category-chart";
import AddedExpense from "./Added-Expense";

function Expenses() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Expenses</h2>
        <AddedExpense />
      </div>
      <div className="flex justify-between py-2 gap-2">
        <Input type="text" placeholder="Search expenses" />
        <Select>
          <SelectTrigger>
            <SelectValue>Filter by</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Normal Expenses">Normal Expenses</SelectItem>
            <SelectItem value="Recurring Expenses">
              Recurring Expenses
            </SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange />
      </div>
      <div className="grid grid-cols-2 gap-4 py-4">
        <Card>
          <CardHeader>
            <CardTitle>Food</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$500.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Normal expenses</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transport</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$200.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Normal expenses</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Entertainment</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$300.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Normal expenses</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Utilities</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$100.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Normal expenses</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Health</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$200.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Normal expenses</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>$200.00</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Recurring expenses</CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div className="justify-center py-4">
        <Component />
      </div>
    </div>
  );
}

export default Expenses;
