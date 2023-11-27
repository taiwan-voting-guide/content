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

      if (!content || content.startsWith("# ") || content.startsWith("## ")) {
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

// Read directory
// s.readdir(folderPath, (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//         return;
//     }
//
//     // Loop through each file in the directory
//     files.forEach(file => {
//         const filePath = path.join(folderPath, file);
//
//         const fileStream = fs.createReadStream(filePath);
//
//         // Use readline to read the file line by line
//         const rl = readline.createInterface({
//             input: fileStream,
//             crlfDelay: Infinity
//         });
//
//         rl.on('line', (line) => {
//             console.log(`Line from ${file}: ${line}`);
//         });
//
//         rl.on('close', () => {
//             console.log(`Finished reading ${file}`);
//         });
//     });
// });
