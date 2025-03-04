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
import { Button } from "./ui/button";
import AddedBudget from "./Added-Budgets";

function Budgets() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Budgets</h2>
        <AddedBudget />
      </div>

      <div className="grid grid-cols-2 gap-4 py-2">
        <Card>
          <CardHeader>
            <CardTitle>Food Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Monthly Allocation: $600</CardDescription>
            <CardDescription>Spent: $450</CardDescription>
            <progress value="75" max="100"></progress>
          </CardContent>
          <CardFooter>
            <CardDescription>Remaining: $150</CardDescription>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transportation Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Monthly Allocation: $250</CardDescription>
            <CardDescription>Spent: $200</CardDescription>
            <progress value="80" max="100"></progress>
          </CardContent>
          <CardFooter>
            <CardDescription>Remaining: $50</CardDescription>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Entertainment Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Monthly Allocation: $350</CardDescription>
            <CardDescription>Spent: $350</CardDescription>
            <progress value="100" max="100"></progress>
          </CardContent>
          <CardFooter>
            <CardDescription>Remaining: $0</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Utilities Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Monthly Allocation: $150</CardDescription>
            <CardDescription>Spent: $100</CardDescription>
            <progress value="66" max="100"></progress>
          </CardContent>
          <CardFooter>
            <CardDescription>Remaining: $50</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Budgets;