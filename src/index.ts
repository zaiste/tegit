import { promises as fs } from 'node:fs';
import GitURLParse from 'git-url-parse';
import { simpleGit } from 'simple-git';

const git = simpleGit();

export const clone = async (repo: string, dest: string, ref = 'main') => {
  const { href: repoURL } = GitURLParse(repo);
  await git.clone(repoURL, dest, { '--branch': ref, '--depth': 1 });
  await fs.rm(`${dest}/.git`, { recursive: true });
};
