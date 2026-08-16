export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  updatedAt: string;
  fork: boolean;
}

export interface GitHubProfile {
  login: string;
  htmlUrl: string;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
  createdAt: string;
}

export interface GitHubData {
  profile: GitHubProfile | null;
  repos: GitHubRepo[];
  source: "live" | "fallback";
}
