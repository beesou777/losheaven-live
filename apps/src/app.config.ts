export interface NuxtAppConfig {
  name?: string;
  description?: string;
  project: {
    github: string;
  };
  author?: {
    name?: string;
    links?: {
      github?: string;
      website?: string;
    };
  };
}

export default defineAppConfig({
  name: 'losheaven trust the process',
  description: 'losheaven is a nepali startup company based on clothing founded by Bishwa Shah and Nayandra Sunwar',
  project: {
    github: 'https://github.com/beesou777',
  },
  author: {
    name: 'Rohan Shakylosheavena',
    links: {
      github: 'https://github.com/beesou777/losheaven',
      website: 'https://www.losheaven.com',
    },
  },
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
});
