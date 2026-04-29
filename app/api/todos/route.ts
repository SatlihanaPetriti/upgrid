import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description } = body;

        if (!title || title.trim() === "") {
            return NextResponse.json({ error: "Title is required" }, { status: 400 })
        }

        const result = await prisma.todo.create({ data: { title, description } });
        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const todos = await prisma.todo.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch todos" },
            { status: 500 }
        );
    }
}