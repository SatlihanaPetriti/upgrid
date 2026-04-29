import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function TasksPage() {

    type Todo = {
        id: number;
        title: string;
        description: string;
        createdAt: string;
    };

    const res = await fetch("http://localhost:3000/api/todos", {
        cache: "no-store",
    });

    const tasks: Todo[] = await res.json();

    return (
        <div className="container mx-auto px-4 py-10">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Tasks</h1>
                    <p className="text-sm text-black/60">
                        Manage and track your tasks
                    </p>
                </div>

                <Link href="/tasks/new">
                    <Button>Create Task</Button>
                </Link>
            </div>

            {/* Tasks List */}
            {tasks.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tasks.map((task) => (
                        <Card
                            key={task.id}
                            className="rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
                        >
                            <CardContent className="p-5 space-y-2">
                                <h2 className="text-lg font-semibold">{task.title}</h2>
                                <p className="text-sm text-black/60 line-clamp-2">
                                    {task.description}
                                </p>
                                <Link
                                    href={`/tasks/${task.id}`}
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    View details →
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <h2 className="text-xl font-semibold">No tasks yet</h2>
                    <p className="text-sm text-black/60 mt-2">
                        Start by creating your first task
                    </p>

                    <Link href="/tasks/new" className="mt-6">
                        <Button>Create your first task</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}