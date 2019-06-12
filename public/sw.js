/*eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.googleAnalytics.initialize();

workbox.routing.registerRoute(
	new RegExp('/.*\\.(html|ico)'),
	new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
	new RegExp('/img/'),
	new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
	new RegExp('/(css|js)/'),
	new workbox.strategies.CacheFirst({
		cacheName: 'css-js-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxAgeSeconds: 7 * 24 * 60 * 60
			})
		]
	})
);

workbox.routing.registerRoute(
	new RegExp('/data/'),
	new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
	new RegExp('https://cdn\\.bootcss\\.com'),
	new workbox.strategies.CacheFirst()
);
