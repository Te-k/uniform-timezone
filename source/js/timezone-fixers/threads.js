import Fixer from '../fixer.js';

/**
 * This script enables uniform timestamps for threads.com
 * Timestamps handled by this script: ALL
*/
const fixer = new Fixer('Threads', [
	{
		name: 'Post Timestamp',
		selector: 'time',
		attachTo: node => node,
		timestamp: node => node.getAttribute('datetime'),
		url: node => node.closest('a')?.href,
	},
]);

fixer.start();
