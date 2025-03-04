"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { Label } from "./ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { Input } from "./ui/input";
import { DatePickerWithRange } from "./Date-picker";

export default function AddedIncome() {
    return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Add Income</Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Add New Income</SheetTitle>
              <SheetDescription>
                Record a new source of Income.
              </SheetDescription>
            </SheetHeader>
            <form className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  type="number"
                  id="amount"
                  placeholder="0.00"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <DatePickerWithRange />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  type="text"
                  id="description"
                  placeholder="Optional description"
                />
              </div>
              <Button type="submit">
                Add Income
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      );
    }