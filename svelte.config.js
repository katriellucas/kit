import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter({
      edge: false,
      split: false
    })
	}
};

export default config;
