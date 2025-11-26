import { useEffect, useState } from "react";
import { getContributors } from "../api/github";
import ContributorsChart from "./charts/ContributorsChart";

export default function RepoModal({ repo, onClose }) {
const [data, setData] = useState([]);

useEffect(() => {
    if (repo) {
        getContributors(repo.owner.login, repo.name).then(setData);
    }
}, [repo]);

if (!repo) return null;

return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
        <div className="bg-white p-6 rounded w-[500px]">
        <h2 className="text-lg font-bold mb-3">{repo.full_name}</h2>
        <ContributorsChart contributors={data} />
        <button className="mt-4 p-2 bg-gray-800 text-white rounded" onClick={onClose}>
        Close
        </button>
    </div>
    </div>
);
}
