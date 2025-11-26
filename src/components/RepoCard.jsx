export default function RepoCard({ repo, toggleBookmark, isBookmarked }) {
return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">

    <div className="flex justify-between items-start">
        <h2 className="font-bold text-lg text-blue-600 truncate">
        {repo.full_name}
        </h2>

        <button onClick={() => toggleBookmark(repo)} className="text-xl">
            {isBookmarked ? "⭐" : "🔖"}
        </button>
    </div>

    <p className="text-sm text-gray-600 mt-2">{repo.description}</p>

    <div className="flex gap-4 text-sm mt-3 text-gray-700">
        ⭐ {repo.stargazers_count}
        🍴 {repo.forks_count}
        🐞 {repo.open_issues_count}
    </div>

    <a
        href={repo.html_url}
        target="_blank"
        className="block mt-3 text-blue-500 font-semibold"
    >
        View on GitHub →
    </a>
    </div>
);
}
