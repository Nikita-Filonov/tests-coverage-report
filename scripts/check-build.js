import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../build/index.html', import.meta.url), 'utf8');
assert.equal(
  (html.match(/<script id="state" type="application\/json">[\s\S]*?<\/script>/g) || []).length,
  1,
  'The report must preserve the state placeholder used by tests-coverage-tool'
);
assert.match(html, /<script type="module"[^>]*>[\s\S]+?<\/script>/, 'The report must contain its application code');
assert.doesNotMatch(html, /<script\b[^>]*\bsrc=/i, 'Application JavaScript must be inlined');
assert.doesNotMatch(html, /<link\b[^>]*href=["'][^"']*\.(?:js|css)["']/i, 'Application assets must be inlined');
console.log('Standalone report build verified');
