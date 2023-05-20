const data = [
    { params: { slug: 'terrace-construction' }, locale: 'ru' },
    { params: { slug: 'canopy-construction' }, locale: 'ru' },
    { params: { slug: 'pergola-construction' }, locale: 'ru' },
    { params: { slug: 'extensions-construction' }, locale: 'ru' },
    { params: { slug: 'woodsheds-construction' }, locale: 'ru' },
    { params: { slug: 'warp-bed-construction' }, locale: 'ru' },
    { params: { slug: 'floor-resurfacing' }, locale: 'ru' },
    { params: { slug: 'renovation-of-wooden-facades' }, locale: 'ru' },
    { params: { slug: 'maintenance-repair-terraces' }, locale: 'ru' },
    { params: { slug: 'consultation' }, locale: 'ru' },
    { params: { slug: 'terrace-construction' }, locale: 'ee' },
    { params: { slug: 'canopy-construction' }, locale: 'ee' },
    { params: { slug: 'pergola-construction' }, locale: 'ee' },
    { params: { slug: 'extensions-construction' }, locale: 'ee' },
    { params: { slug: 'woodsheds-construction' }, locale: 'ee' },
    { params: { slug: 'warp-bed-construction' }, locale: 'ee' },
    { params: { slug: 'floor-resurfacing' }, locale: 'ee' },
    { params: { slug: 'renovation-of-wooden-facades' }, locale: 'ee' },
    { params: { slug: 'maintenance-repair-terraces' }, locale: 'ee' },
    { params: { slug: 'consultation' }, locale: 'ee' }
];

export default (req, res) => {
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(data));
    res.end();
};

const createSitemap = (data) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data
    .map(({ params: { slug }, locale }) => {
        return `
        <url>
          <loc>${`https://www.semarim.ee/${locale}/${slug}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
`;

