import { useState, useEffect } from "react";
import { searchRepositories } from "../api/github";
import SearchBar from "../components/SearchBar";
import RepoList from "../components/RepoList";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
    const [query, setQuery] = useState("react");
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);


const [sort, setSort] = useState("stars");

const [language, setLanguage] = useState("");

const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

const toggleBookmark = (repo) => {
    const exists = bookmarks.some((b) => b.id === repo.id);

    if (exists) {
        setBookmarks(bookmarks.filter((b) => b.id !== repo.id));
    } else {
        setBookmarks([...bookmarks, repo]);
    }
};

useEffect(() => {
    
    const q = language ? `${query}+language:${language}` : query;

    setLoading(true);
    searchRepositories(q, sort).then((data) => {
        setRepos(data);
        setLoading(false);
    });
}, [query, sort, language]); 

return (
    <div>
        <SearchBar onSearch={setQuery} />


    <div className="p-4 flex justify-center">
        <select
            className="p-2 border rounded"
            onChange={(e) => setSort(e.target.value)}
        >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Recently Updated</option>
        </select>
    </div>


    <div className="p-4 flex justify-center">
        <select
            className="p-2 border rounded"
            onChange={(e) => setLanguage(e.target.value)}
        >
        <option value="">All Languages</option>
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="go">Go</option>
        <option value="rust">Rust</option>
        </select>
    </div>

    {loading ? (
        <p className="text-center mt-5">Loading...</p>
    ) : (
        <RepoList repos={repos}
        bookmarks={bookmarks}
        toggleBookmark={toggleBookmark} />
    )}
    </div>
);
}
