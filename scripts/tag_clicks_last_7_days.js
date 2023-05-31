const projectId = process.env.MIXPANEL_PROJECT_ID;
const bookmarkId = process.env.MIXPANEL_BOOKMARK_ID;
const secret = process.env.MIXPANEL_SECRET;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: `Basic ${secret}`,
  },
};

(async function () {
  const response = await fetch(
    `https://mixpanel.com/api/2.0/insights?project_id=${projectId}&bookmark_id=${bookmarkId}`,
    options
  );
  const mixpanelData = await response.json();
  const tags = Object.keys(mixpanelData.series["Tag - Total"])
    .filter((key) => key !== "$overall")
    .map((key) => {
      return {
        key,
        value: mixpanelData.series["Tag - Total"][key].all,
      };
    })
    .sort((a, b) => b.value - a.value);
  const data = {
    title: "tag_clicks_last_7_days",
    name: "過去7天標籤點擊數",
    order: 1,
    computed_at: mixpanelData.computed_at,
    from_data: mixpanelData.date_range.from_date,
    to_data: mixpanelData.date_range.to_date,
    data: {
      total: mixpanelData.series["Tag - Total"]["$overall"].all,
      tags,
    },
  };

  console.log(JSON.stringify(data));
})();
