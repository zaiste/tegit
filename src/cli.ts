#!/usr/bin/env node

import { clone } from "./index.js";

const args = process.argv.slice(2);
const [repo, dest] = args;

const main = async () => {
  await clone(repo, dest);
}

main()