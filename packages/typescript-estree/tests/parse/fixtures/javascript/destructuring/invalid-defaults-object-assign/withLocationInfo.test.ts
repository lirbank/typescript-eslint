import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/destructuring/invalid-defaults-object-assign.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);