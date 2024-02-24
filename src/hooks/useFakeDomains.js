import { fakeDomains } from '@/fake/fake.js';

export const useFakeDomains = (name) => {
  return fakeDomains.map((domain) => {
    return { ...domain, second: name.replace(/\s+/g, '') };
  });
};
