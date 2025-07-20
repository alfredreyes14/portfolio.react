export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Add any paths you want to exclude
    },
    sitemap: 'https://alfreddev.com/sitemap.xml', // Update with your actual domain
  };
} 