// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-white shadow-inner py-4 mt-8">
            <div className="container mx-auto text-center text-sm text-gray-600">
                © {new Date().getFullYear()} FiscalNote. All rights reserved.
            </div>
        </footer>
    );
}

