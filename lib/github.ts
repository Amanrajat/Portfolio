import { profile } from "@/data/profile";
import type { GitHubData, GitHubProfile, GitHubRepo } from "@/types/github";

const GITHUB_API = "https://api.github.com";

// Curated fallback used if the GitHub API is unreachable or rate-limited.
// Mirrors real, publicly verified repositories so the section never breaks or shows fake data.
const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "EDITDOCSNOW-FE",
    fullName: "Amanrajat/EDITDOCSNOW-FE",
    description: "Frontend for EditDocsNow — an online PDF editing and processing platform.",
    htmlUrl: "https://github.com/Amanrajat/EDITDOCSNOW-FE",
    homepage: "https://editdocsnow-fe.vercel.app",
    language: "TypeScript",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-08-15T20:52:19Z",
    fork: false,
  },
  {
    id: 2,
    name: "EDITDOCSNOW-BE",
    fullName: "Amanrajat/EDITDOCSNOW-BE",
    description: "Django REST API powering EditDocsNow's PDF editing and processing tools.",
    htmlUrl: "https://github.com/Amanrajat/EDITDOCSNOW-BE",
    homepage: null,
    language: "Python",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-08-16T08:12:08Z",
    fork: false,
  },
  {
    id: 3,
    name: "Finance_Backend",
    fullName: "Amanrajat/Finance_Backend",
    description:
      "Finance backend with role-based access control, transaction management, and analytics APIs built using Django REST Framework and PostgreSQL.",
    htmlUrl: "https://github.com/Amanrajat/Finance_Backend",
    homepage: null,
    language: "Python",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-04-06T18:07:46Z",
    fork: false,
  },
  {
    id: 4,
    name: "PDF_RESUME_EDITOR",
    fullName: "Amanrajat/PDF_RESUME_EDITOR",
    description: "Full-stack app for editing PDF resumes directly in the browser.",
    htmlUrl: "https://github.com/Amanrajat/PDF_RESUME_EDITOR",
    homepage: null,
    language: "Python",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-01-11T16:13:24Z",
    fork: false,
  },
  {
    id: 5,
    name: "Pdf_Chatt_Bot",
    fullName: "Amanrajat/Pdf_Chatt_Bot",
    description: "AI-powered chatbot that tailors resumes to job descriptions using an LLM.",
    htmlUrl: "https://github.com/Amanrajat/Pdf_Chatt_Bot",
    homepage: null,
    language: "Python",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-01-05T17:48:08Z",
    fork: false,
  },
  {
    id: 6,
    name: "UrbanBasket-ECOMMMERCE",
    fullName: "Amanrajat/UrbanBasket-ECOMMMERCE",
    description: "Full-stack e-commerce application with a Django backend and React frontend.",
    htmlUrl: "https://github.com/Amanrajat/UrbanBasket-ECOMMMERCE",
    homepage: null,
    language: "Python",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2025-09-22T20:20:16Z",
    fork: false,
  },
];

const FALLBACK_PROFILE: GitHubProfile = {
  login: profile.githubUsername,
  htmlUrl: profile.github,
  avatarUrl: "https://avatars.githubusercontent.com/u/153652946?v=4",
  publicRepos: 20,
  followers: 0,
  following: 1,
  createdAt: "2023-12-12T16:32:38Z",
};

// Repos to keep out of the public "Open Source & GitHub" feed —
// forks, coursework/assignment scratch repos, and profile config.
const EXCLUDED_REPOS = new Set([
  "amanrajat",
  "git-assignment",
  "assignment_project",
  "cyethackassignment",
  "wagtail_open_source",
  "js-code-vs",
]);

function mapRepo(raw: Record<string, unknown>): GitHubRepo {
  return {
    id: raw.id as number,
    name: raw.name as string,
    fullName: raw.full_name as string,
    description: (raw.description as string | null) ?? null,
    htmlUrl: raw.html_url as string,
    homepage: (raw.homepage as string | null) ?? null,
    language: (raw.language as string | null) ?? null,
    stargazersCount: (raw.stargazers_count as number) ?? 0,
    forksCount: (raw.forks_count as number) ?? 0,
    updatedAt: raw.updated_at as string,
    fork: Boolean(raw.fork),
  };
}

function mapProfile(raw: Record<string, unknown>): GitHubProfile {
  return {
    login: raw.login as string,
    htmlUrl: raw.html_url as string,
    avatarUrl: raw.avatar_url as string,
    publicRepos: (raw.public_repos as number) ?? 0,
    followers: (raw.followers as number) ?? 0,
    following: (raw.following as number) ?? 0,
    createdAt: raw.created_at as string,
  };
}

function authHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  return token
    ? { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
    : { Accept: "application/vnd.github+json" };
}

// Revalidated hourly so the page stays dynamic without hammering the GitHub API on every request.
const REVALIDATE_SECONDS = 3600;

export async function getGitHubData(): Promise<GitHubData> {
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API}/users/${profile.githubUsername}`, {
        headers: authHeaders(),
        next: { revalidate: REVALIDATE_SECONDS },
      }),
      fetch(
        `${GITHUB_API}/users/${profile.githubUsername}/repos?per_page=100&sort=updated`,
        { headers: authHeaders(), next: { revalidate: REVALIDATE_SECONDS } }
      ),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      throw new Error(
        `GitHub API responded with ${profileRes.status}/${reposRes.status}`
      );
    }

    const profileRaw = (await profileRes.json()) as Record<string, unknown>;
    const reposRaw = (await reposRes.json()) as Record<string, unknown>[];

    const repos = reposRaw
      .map(mapRepo)
      .filter((r) => !r.fork && !EXCLUDED_REPOS.has(r.name.toLowerCase()))
      .sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );

    return {
      profile: mapProfile(profileRaw),
      repos,
      source: "live",
    };
  } catch {
    return {
      profile: FALLBACK_PROFILE,
      repos: FALLBACK_REPOS,
      source: "fallback",
    };
  }
}
