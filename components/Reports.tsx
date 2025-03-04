"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DatePickerWithRange } from "./Date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Reports() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses",
        data: [33, 53, 85, 41, 44, 65],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Expenses",
      },
    },
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Reports</h2>
      </div>
      <div className="flex justify-between py-2 gap-2">
        <Select>
          <SelectTrigger>
            <SelectValue>Select Report Type</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly Report</SelectItem>
            <SelectItem value="category">Category Report</SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange />
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Expense Report</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>View your expense trends.</CardDescription>
            <Bar options={options} data={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Reports;