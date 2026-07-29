import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import ContactForm from '@components/contact/ContactForm.astro';
import { en } from '@i18n/translations/en';

test('ContactForm renders correctly', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(ContactForm);

  expect(result).toContain(en.contactForm.description);
  expect(result).toContain(en.contactForm.form.name);
  expect(result).toContain(en.contactForm.form.email);
  expect(result).toContain(en.contactForm.form.message);
  expect(result).toContain(en.contactForm.form.submit);
});

test('ContactForm wires up the Basin endpoint and Turnstile site key', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(ContactForm);

  // Guards the regression that shipped `usebasin.com/f/undefined` to production:
  // ContactForm.astro now throws at build time rather than inlining a missing env var.
  expect(result).toContain('https://usebasin.com/f/test-form-id');
  expect(result).toContain("contactForm('1x00000000000000000000AA')");
  expect(result).not.toContain('undefined');
});
