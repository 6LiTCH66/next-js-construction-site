const data = [
    { params: { slug: '/terrace-construction' }, locale: 'ee' },
    { params: { slug: '/canopy-construction' }, locale: 'ee' },
    { params: { slug: '/pergola-construction' }, locale: 'ee' },
    { params: { slug: '/extensions-construction' }, locale: 'ee' },
    { params: { slug: '/woodsheds-construction' }, locale: 'ee' },
    { params: { slug: '/warp-bed-construction' }, locale: 'ee' },
    { params: { slug: '/floor-resurfacing' }, locale: 'ee' },
    { params: { slug: '/renovation-of-wooden-facades' }, locale: 'ee' },
    { params: { slug: '/maintenance-repair-terraces' }, locale: 'ee' },
    { params: { slug: '/consultation' }, locale: 'ee' },

    { params: { slug: 'terrace-construction' }, locale: '' },
    { params: { slug: 'canopy-construction' }, locale: '' },
    { params: { slug: 'pergola-construction' }, locale: '' },
    { params: { slug: 'extensions-construction' }, locale: '' },
    { params: { slug: 'woodsheds-construction' }, locale: '' },
    { params: { slug: 'warp-bed-construction' }, locale: '' },
    { params: { slug: 'floor-resurfacing' }, locale: '' },
    { params: { slug: 'renovation-of-wooden-facades' }, locale: '' },
    { params: { slug: 'maintenance-repair-terraces' }, locale: '' },
    { params: { slug: 'consultation' }, locale: '' },

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
          <loc>${`https://www.semarim.ee/${locale}${slug}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
`;

