"use client"

import React, { use, useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Tiptap } from "./editor"
import { Button } from "./ui/button"

// This can come from your database or API.
const defaultValues: Partial<any> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export default function PublishForm() {
  const [searchText, setSearchText] = useState("")

  const form = useForm<any>({
    defaultValues,
  })
  const { fields, append } = useFieldArray({
    name: "links",
    control: form.control,
  })

  function onSubmit(data: any) {
    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-none w-full">
        <FormField
          control={form.control}
          name="title"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Review Title</FormLabel>
              <FormControl>
                <Input placeholder="Your review title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review Body</FormLabel>
              <FormControl>
                <Tiptap />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Preview</Button>
        <Button type="submit">Publish</Button>
      </form>
    </Form>
  )
}
