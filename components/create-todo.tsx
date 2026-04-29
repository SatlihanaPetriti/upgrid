"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CreateTodo() {
    const [value, setValue] = useState({ title: "", description: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setValue((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await fetch("/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value)
        });
        setValue({ title: "", description: "" });
    };

    return (
        <div className="flex items-center justify-center py-10">
            <Card className="w-full max-w-lg shadow-lg rounded-2xl">

                <CardHeader>
                    <CardTitle>Create New Task</CardTitle>
                    <CardDescription>
                        Add a title and description for your task
                    </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">

                        {/* Title */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Title</label>
                            <Input
                                placeholder="e.g. Build Navbar UI"
                                value={value.title}
                                name="title"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Description</label>
                            <Textarea
                                placeholder="Write task details..."
                                value={value.description}
                                name="description"
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>

                    </CardContent>

                    <CardFooter>
                        <Button className="w-full" type="submit">
                            Create Task
                        </Button>
                    </CardFooter>

                </form>
            </Card>
        </div>
    );
}