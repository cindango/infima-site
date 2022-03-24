import axios from "axios";

const tvlDocsApiYamlUrl = "https://apidocs.insight360.io/index.yml";

export async function get(req, res) {
  try {
    const { data } = await axios.get(tvlDocsApiYamlUrl);
    res.setHeader("Content-Type", "text/yaml");
    res.end(data);
  } catch (error) {
    res.writeHead(500);
    res.end("Failed to load TVL API OAS definition");
  }
}
