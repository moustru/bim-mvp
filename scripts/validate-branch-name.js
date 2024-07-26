import chalk from "chalk";
import { exec } from "child_process";

exec("git rev-parse --abbrev-ref HEAD", (_, branchName) => {
  const validBranchesRegex = /(feature|bugfix|refactor)\/(BIM)-\d+(-\w+)*/;

  if (branchName.match("master")) {
    return;
  }

  if (!validBranchesRegex.test(branchName)) {
    const msg =
      "Имена веток должны строго следовать правилам. Допустимые паттерны: feature/BIM-*, bugfix/BIM-*, refactor/BIM-*";
    console.log(chalk.bgRed.white.bold(msg));
    process.exit(1);
  }
});
