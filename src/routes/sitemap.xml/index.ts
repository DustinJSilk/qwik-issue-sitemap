import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ send, headers }) => {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>Some url goes here</loc>
      </url>
    </urlset>`;

  headers.set("Content-Type", "text/xml");
  send(200, content);
};
