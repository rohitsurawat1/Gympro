'use client';

import React, { useState, useCallback, memo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { Input } from '../ui/input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

interface WorkoutData {
  date: string;
  cardio: number;
  strength: number;
  yoga: number;
}

const initialData: WorkoutData[] = [
  { date: '2024-10-01', cardio: 400, strength: 240, yoga: 240 },
  { date: '2024-10-02', cardio: 300, strength: 139, yoga: 221 },
];

const WorkoutChart = () => {
  const [data, setData] = useState<WorkoutData[]>(initialData);
  const { register, handleSubmit, setValue } = useForm<WorkoutData>();
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const onSubmit = useCallback(
    (formData: WorkoutData) => {
      if (startDate) {
        const newEntry = {
          ...formData,
          date: startDate.toISOString().split('T')[0],
        };
        setData((prevData) => [...prevData, newEntry]);
        setStartDate(null); // Reset the date picker
      }
    },
    [startDate]
  );

  // Calculate totals outside the return function for better performance
  const totalCardio = data.reduce((acc, curr) => acc + curr.cardio, 0);
  const totalStrength = data.reduce((acc, curr) => acc + curr.strength, 0);
  const totalYoga = data.reduce((acc, curr) => acc + curr.yoga, 0);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Workout Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cardio" fill="#8884d8" />
            <Bar dataKey="strength" fill="#82ca9d" />
            <Bar dataKey="yoga" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>

        {/* Statistics Section */}
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Statistics</h2>
          <p>Total Cardio: {totalCardio}</p>
          <p>Total Strength: {totalStrength}</p>
          <p>Total Yoga: {totalYoga}</p>
        </div>

        {/* Form for adding new workout data */}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Add Workout Data</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                if (date) setValue('date', date.toISOString().split('T')[0]);
              }}
              className="border rounded-md p-2"
              placeholderText="Select Date"
              dateFormat="yyyy-MM-dd"
              isClearable
            />
            <Input {...register('cardio')} type="number" placeholder="Cardio (e.g., 300)" className="border rounded-md p-2" />
            <Input {...register('strength')} type="number" placeholder="Strength (e.g., 200)" className="border rounded-md p-2" />
            <Input {...register('yoga')} type="number" placeholder="Yoga (e.g., 150)" className="border rounded-md p-2" />
            <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 transition duration-200">Add Data</Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(WorkoutChart);
