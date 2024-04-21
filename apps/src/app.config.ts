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
  name: 'losheaven clothing',
  project: {
    github: 'https://github.com/beesou777',
  },
  author: {
    name: 'losheaven clothing',
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
