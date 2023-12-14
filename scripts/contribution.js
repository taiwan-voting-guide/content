const fs = require("fs/promises");
const path = require("path");

const folderPath = "content/blame";

(async function () {
  const filenames = await fs.readdir(folderPath);

  const contributionMap = new Map();
  for (const filename of filenames) {
    const file = await fs.open(path.join(folderPath, filename));

    for await (const line of file.readLines()) {
      const { email, content } = parseLine(line);

      if (!content || content.startsWith("# ") || content.startsWith("## ") || content.startsWith("###")) {
        continue;
      }

      const count = contributionMap.get(email);
      if (count) {
        contributionMap.set(email, count + 1);
      } else {
        contributionMap.set(email, 1);
      }
    }
  }

  const lineCounts = [...contributionMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([email, count]) => ({ email, count }));

  const res = {
    timestamp: new Date().getTime(),
    lineCounts,
  };

  await fs.writeFile("content/contribution.json", JSON.stringify(res, null, 2));
})();

function parseLine(str) {
  const [_hash, emailStr, _tsStr, contentStr] = str.split("\t");
  const email = emailStr.substring(2, emailStr.length - 1);
  let [_lineNumber, content] = contentStr.split(")");
  content = content.trim();
  return {
    email,
    content,
  };
}
