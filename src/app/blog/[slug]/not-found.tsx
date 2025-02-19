import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Article introuvable</p>
            <Link
                href="/blog"
                className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
                Retour aux articles
            </Link>
        </div>
    );
}
