import { notFound } from "next/navigation";

type Task = {
    id: string;
    title: string;
    description: string;
    createdAt: string;
};

export default async function TaskPage({params,}: {params: { id: string }}) {
    
    const res = await fetch(
        `http://localhost:3000/api/todos/${params.id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) return notFound();

    const task: Task = await res.json();

    return (
        <div className="container mx-auto px-4 py-10 max-w-2xl">

            <h1 className="text-3xl font-bold mb-2">
                {task.title}
            </h1>
            <div className="p-6 border rounded-2xl">
                <p className="text-black/80">
                    {task.description}
                </p>
            </div>
        </div>
    );
}