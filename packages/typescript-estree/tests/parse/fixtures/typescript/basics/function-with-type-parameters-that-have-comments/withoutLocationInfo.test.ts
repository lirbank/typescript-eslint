import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/function-with-type-parameters-that-have-comments.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);