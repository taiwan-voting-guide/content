const fs = require("fs/promises");
const path = require("path");

(async function () {
  const [,, ...params] = process.argv;
  const [namefile] = params;

  const template = await fs.open('content/template.md', "r");
  const templateContent = await template.readFile("utf8");

  const file = await fs.open(namefile, "r");

  for await (const line of file.readLines()) {
    const name = line.trim();
    const filename = path.join("content/politician", `${name}.md`);

    try {
      await fs.access(filename);
      console.log(`File ${filename} already exists`);
      continue;
    } catch (error) {
      // do nothing
    }

    const content = templateContent.replace(/<姓名>/g, name);
    console.log(filename)
    fs.writeFile(filename, content);
  }

})();
