export const upsertPageCustomCode = async (req, res) => {
    const pageId = req.params.pageId;
    const { selectedScript, version } = req.body;
  
    const applyScripts = async (scriptApplyList) => {
      try {
        const data = await req.webflow.pages.scripts.upsertCustomCode(pageId, scriptApplyList);
        res.json(data);
      } catch (error) {
        res.status(500).send("Failed to add/update page-level custom code");
      }
    };
  
    try {
      const response = await req.webflow.pages.scripts.getCustomCode(pageId);
      const existingScripts = response.scripts || [];
      const newScript = {
        id: selectedScript,
        location: req.query.location,
        version: version,
      };
      existingScripts.push(newScript);
      const scriptApplyList = {
        scripts: existingScripts,
      };
  
      await applyScripts(scriptApplyList);
    } catch (error) {
      const scriptApplyList = {
        scripts: [
          {
            id: selectedScript,
            location: req.query.location,
            version: version,
          },
        ],
      };
      await applyScripts(scriptApplyList);
    }
  };
  