import { prisma } from "@/lib/prisma";
export default async function TaskById({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log("id----", id);
    return (
        <h4></h4>
    )
}