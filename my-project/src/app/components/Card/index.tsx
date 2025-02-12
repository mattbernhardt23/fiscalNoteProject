import Image from "next/image";

export default function Card({
    name,
    role,
    department,
    email,
    profilePicture,
    yearsAtCompany,
}: {
    name: string;
    role: string;
    department: string;
    email: string;
    profilePicture: string;
    yearsAtCompany: number;
}) {
    // Determine the border color based on years of experience
    const borderColor =
        yearsAtCompany >= 5 ? "border-yellow-600" : yearsAtCompany <= 1 ? "border-red-700" : "border-gray-500";

    return (
        <article
            className={`bg-white shadow-md p-4 rounded-3xl flex flex-col sm:flex-row w-full border-4 ${borderColor} transition-transform duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:ring-blue-500`}
            role="region"
            aria-labelledby={`employee-${name.replace(/\s+/g, "-").toLowerCase()}`}
            tabIndex={0} // Allows keyboard navigation
        >
            {/* Column 1: Profile Picture */}
            <div className="w-full sm:w-1/6 flex justify-center mb-4 sm:mb-0">
                <Image
                    src={profilePicture}
                    alt={`Profile picture of ${name}`}
                    className="rounded-full object-cover"
                    width={64}
                    height={64}
                />
            </div>

            {/* Column 2: Name, Role, and Department */}
            <div className="w-full sm:w-2/6 flex flex-col items-center sm:items-start justify-start text-center">
                <h2 id={`employee-${name.replace(/\s+/g, "-").toLowerCase()}`} className="text-lg font-semibold">
                    {name}
                </h2>
                <p className="text-sm text-gray-700">{role}</p>
                <p className="text-sm text-gray-600">{department}</p>
            </div>

            {/* Column 3: Experience */}
            <div className="w-full sm:w-1/6 flex flex-col sm:items-start items-center justify-start text-center mt-2 sm:mt-0">
                <p className="text-sm text-gray-700 font-semibold">Experience</p>
                <p className="text-lg font-semibold">{yearsAtCompany}</p>
            </div>

            {/* Column 4: Contact */}
            <div className="w-full sm:w-2/6 flex flex-col sm:items-start items-center justify-start text-center sm:text-left mt-2 sm:mt-0">
                <p className="text-sm text-gray-700 font-semibold">Contact</p>
                <a href={`mailto:${email}`} className="text-lg text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {email}
                </a>
            </div>
        </article>
    );
}
