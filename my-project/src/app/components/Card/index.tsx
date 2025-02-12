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
        <div className={`bg-white shadow-md p-4 rounded-3xl flex flex-row items-center w-full min-w-[800px] border-4 ${borderColor} transition-transform duration-300 ease-in-out hover:scale-105`}>
            <div className="w-1/6 flex justify-center">
                <img
                    src={profilePicture}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover"
                />
            </div>
            <div className="w-2/6 flex flex-col">
                <h2 className="text-lg font-semibold hover:cursor-pointer">{name}</h2>
                <p className="text-sm text-gray-600">{role}</p>
                <p className="text-sm text-gray-500">{department}</p>
            </div>
            <div className="w-1/6 text-center">
                <p className="text-xs text-gray-500 py-2">Years at Company</p>
                <p className="text-lg font-semibold">{yearsAtCompany}</p>
            </div>
            <div className="w-2/6 text-center">
                <p className="text-xs text-gray-500 py-2">Contact</p>
                <p className="text-xs text-gray-400">{email}</p>
            </div>
        </div>
    );
}
