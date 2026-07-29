/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  // ContactForm.astro fails the build when these are missing (so a broken form can never ship
  // again). Supply throwaway values so component rendering tests can run without a .env.
  define: {
    'import.meta.env.BASIN_FORM_ID': JSON.stringify('test-form-id'),
    'import.meta.env.TURNSTILE_SITEKEY': JSON.stringify('1x00000000000000000000AA'),
  },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'lcov', 'cobertura'],
      exclude: ['src/assets/**', 'src/i18n/translation.ts', 'src/utils/*.ts', 'src/scripts/dna-background.ts'],
    },
  },
});
