import Image from "next/image";
import fiscalNoteLogo from "@public/fiscalNoteLogo.png";


export default function Header() {
    return (
        <header className="bg-white shadow-md rounded-b-md">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="relative w-64 h-40">
                    <Image
                        src={fiscalNoteLogo}
                        alt="Company Logo"
                        layout="fill"
                        objectFit="contain"
                        priority
                    />
                </div>
            </div>
        </header>
    );
}

