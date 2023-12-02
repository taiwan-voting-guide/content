const fs = require("fs/promises");
const path = require("path");

const folderPath = "content/politician";
const [, , ...params] = process.argv;
const [newTag] = params;

(async function () {
  const filenames = await fs.readdir(folderPath);

  for (const filename of filenames) {
    const file = await fs.open(path.join(folderPath, filename));
    const content = await file.readFile("utf-8");
    const newContent = `${content}\n## ${newTag}\n`;
    await fs.writeFile(path.join(folderPath, filename), newContent);
    file.close();
  }
})();
