import { Star, GitFork, GitCommit } from 'lucide-react';

const GithubStats = () => {
    // Data statis (hardcoded)
    const stats = {
        stars: 4,
        forks: 2,
        commits: 1.984,
        username: 'IllalRajinCoding'
    };

    return (
        <div className="max-w-md mx-auto p-6  shadow-md pb-24">
            <h2 className="text-xl font-bold mb-4 text-center">
                GitHub Stat {stats.username}
            </h2>

            <div className="grid grid-cols-3 gap-4 text-center">
                {/* Stars */}
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <Star className="mx-auto text-yellow-500 mb-2" size={24} />
                    <div className="text-2xl font-bold">{stats.stars}</div>
                    <div className="text-sm text-gray-500">Stars</div>
                </div>

                {/* Forks */}
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <GitFork className="mx-auto text-green-500 mb-2" size={24} />
                    <div className="text-2xl font-bold">{stats.forks}</div>
                    <div className="text-sm text-gray-500">Forks</div>
                </div>

                {/* Commits */}
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <GitCommit className="mx-auto text-blue-500 mb-2" size={24} />
                    <div className="text-2xl font-bold">{stats.commits}+</div>
                    <div className="text-sm text-gray-500">Commits</div>
                </div>
            </div>

            <div className="mt-6 text-center">
                <a
                    href={`https://github.com/${stats.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                >
                    View Profile
                </a>
            </div>
        </div>
    );
};

export default GithubStats;