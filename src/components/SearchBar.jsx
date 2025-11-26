export default function SearchBar({ onSearch }) {
return (
    <div className="p-4 bg-gray-800 flex justify-center">
    <input
        className="w-96 p-2 rounded border border-gray-400 text-white placeholder-white"
        placeholder="Search GitHub repos..."
        onChange={(e) => onSearch(e.target.value)}
    />
    </div>
);
}
