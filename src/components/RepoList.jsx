import RepoCard from "./RepoCard";

export default function RepoList({ repos, bookmarks, toggleBookmark }) {
return (
    <div className="grid p-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo}  toggleBookmark={toggleBookmark}
        isBookmarked={bookmarks.some((b) => b.id === repo.id)}/>
        ))}
    </div>
);
}
