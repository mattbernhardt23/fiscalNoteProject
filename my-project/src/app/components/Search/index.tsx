export default function Search({
    searchTerm,
    setSearchTerm,
}: {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}) {
    return (
        <div className="w-full mb-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search employees by name..."
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
}
