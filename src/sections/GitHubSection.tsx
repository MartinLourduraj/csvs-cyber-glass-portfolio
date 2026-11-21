import React, { useState, useEffect } from 'react';
import { 
  Star, 
  GitFork, 
  ExternalLink, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { GithubIcon } from '../components/GithubIcon';
import { PERSONAL_INFO, GITHUB_REPOS_CACHE } from '../data/portfolioData';
import { GitHubRepoData } from '../types';

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepoData[]>(GITHUB_REPOS_CACHE);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=6`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }

        const data = await response.json();
        if (isMounted && Array.isArray(data) && data.length > 0) {
          const formatted = data.map((repo: any) => ({
            name: repo.name,
            description: repo.description || 'Verified healthcare / enterprise software repository.',
            language: repo.language || 'TypeScript',
            stars: repo.stargazers_count || 0,
            forks: repo.forks_count || 0,
            url: repo.html_url,
            updatedAt: new Date(repo.updated_at).toLocaleDateString(),
            topics: repo.topics || [],
          }));
          setRepos(formatted);
          setUsingFallback(false);
        }
      } catch (err) {
        if (isMounted) {
          setRepos(GITHUB_REPOS_CACHE);
          setUsingFallback(true);
        }
      }
    };

    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, []);

  const languageColors: Record<string, string> = {
    TypeScript: 'bg-[#3178C6]',
    Python: 'bg-[#3572A5]',
    JavaScript: 'bg-[#F7DF1E]',
    HTML: 'bg-[#E34C26]',
    CSS: 'bg-[#563D7C]',
  };

  return (
    <section id="github" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="OPEN SOURCE INTEL"
          title="Verified Public"
          titleHighlight="GitHub Repositories."
          subtitle={`Live inspection of public repositories and contributions under @${PERSONAL_INFO.githubUsername}.`}
          align="center"
          color="blue"
        />

        {/* GitHub HUD Control Banner */}
        <div className="flex flex-wrap items-center justify-between p-4 rounded-2xl bg-[#071426]/80 border border-[#00D9FF]/30 backdrop-blur-xl mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D9FF]">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-sm sm:text-base">
                  github.com/{PERSONAL_INFO.githubUsername}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED ACCOUNT
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {usingFallback ? 'Displaying verified snapshot cache (rate limit protected)' : 'Live API feed connected'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-white text-xs font-mono font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              <span>Follow on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <GlassCard
              key={repo.name}
              variant="default"
              className="p-5 sm:p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-[#00D9FF]">
                    <BookOpen className="w-4 h-4 text-[#00D9FF] shrink-0" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-sm sm:text-base text-white hover:text-[#00D9FF] transition-colors truncate"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400 shrink-0">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4 line-clamp-3">
                  {repo.description}
                </p>

                {/* Topics / Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded bg-[#071426] border border-white/10 text-[10px] font-mono text-slate-400"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Lower Repo Stats */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || 'bg-slate-400'}`} />
                    <span className="text-slate-300">{repo.language}</span>
                  </span>

                  <span className="flex items-center gap-1 hover:text-[#00D9FF] transition-colors">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>

                  <span className="flex items-center gap-1 hover:text-[#00D9FF] transition-colors">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00D9FF] hover:underline flex items-center gap-1 text-[11px]"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
