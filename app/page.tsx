import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Organize your tasks <br /> with <span className="text-black/70">TaskFlow</span>
                </h1>

                <p className="mt-6 text-lg text-black/60 max-w-2xl mx-auto">
                    A simple and powerful way to manage your daily tasks, projects,
                    and productivity — all in one place.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <Link href="/register">
                        <Button size="lg">Get Started</Button>
                    </Link>

                    <Link href="/dashboard">
                        <Button variant="outline" size="lg">
                            View Dashboard
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">

                <div className="p-6 border rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Task Management</h3>
                    <p className="text-sm text-black/60">
                        Create, edit and organize your tasks بسهولة and stay focused.
                    </p>
                </div>

                <div className="p-6 border rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Projects</h3>
                    <p className="text-sm text-black/60">
                        Group tasks into projects and track progress visually.
                    </p>
                </div>

                <div className="p-6 border rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Calendar</h3>
                    <p className="text-sm text-black/60">
                        Plan your schedule and never miss deadlines again.
                    </p>
                </div>

            </section>

            {/* CTA */}
            <section className="py-20 text-center border-t">
                <h2 className="text-3xl font-bold">
                    Ready to boost your productivity?
                </h2>

                <p className="mt-4 text-black/60">
                    Start managing your tasks today — it’s free.
                </p>

                <div className="mt-6">
                    <Link href="/register">
                        <Button size="lg">Create your account</Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}