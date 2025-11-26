import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function searchRepositories(query, sort = "stars") {
try {
    const res = await axios.get(`${BASE_URL}/search/repositories`, {
    params: { q: query, sort, order: "desc", per_page: 20 },
    });
    return res.data.items;
} catch (err) {
    console.error(err);
    return [];
}
}

export async function getContributors(owner, repo) {
try {
    const res = await axios.get(
    `${BASE_URL}/repos/${owner}/${repo}/contributors`
    );
    return res.data.slice(0, 10);
} catch (err) {
    console.error(err);
    return [];
}
}
