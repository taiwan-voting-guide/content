const path = require("path");
const { writeFile } = require("node:fs/promises");

const projectId = process.env.MIXPANEL_PROJECT_ID;
const bookmarkId = process.env.MIXPANEL_BOOKMARK_ID;
const secret = process.env.MIXPANEL_SECRET;

(async function () {
  const response = await fetch(
    `https://mixpanel.com/api/2.0/insights?project_id=${projectId}&bookmark_id=${bookmarkId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Basic ${secret}`,
      },
    }
  );

  const mixpanelData = await response.json();
  if (mixpanelData.error) {
    console.error(mixpanelData.error);
    return;
  }

  const data = {
    title: "tag_clicks_last_7_days",
    name: "過去7天標籤點擊數",
    order: 1,
    computed_at: mixpanelData.computed_at,
    from_data: mixpanelData.date_range.from_date,
    to_data: mixpanelData.date_range.to_date,
    data: {
      total: 0,
      tags: [],
    },
  };

  const total = mixpanelData.series["Tag - Total"];
  if (total) {
    data.data.total = total["$overall"].all;
    data.data.tags = Object.keys(mixpanelData.series["Tag - Total"])
      .filter((key) => key !== "$overall")
      .map((key) => {
        return {
          key,
          value: total[key].all,
        };
      })
      .sort((a, b) => b.value - a.value);
  }

  const filePath = path.join(__dirname, `../content/data/${data.title}.json`);
  await writeFile(filePath, JSON.stringify(data));
})();
