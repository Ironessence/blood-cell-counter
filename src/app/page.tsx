'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormData = {
  maxCells: number;
};

export default function Home() {
  const router = useRouter();
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    router.push(`/count?maxCells=${data.maxCells}`);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Cell Counter</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center">
          <FormField
            control={form.control}
            name="maxCells"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum number of cells</FormLabel>
                <FormControl>
                  <Input type="number" {...field} className="max-w-[400px]" placeholder="E.g. 100" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Begin count</Button>
        </form>
      </Form>
    </div>
  );
}