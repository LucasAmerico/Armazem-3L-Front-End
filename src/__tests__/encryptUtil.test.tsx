/* eslint-disable no-undef */
import encryptMD5 from '../utils/security';

// hash based at 'teste123' string
const testPassword = 'aa1bf4646de67fd9086cf6c79007026c';

it('Should encrypt string correctly', async () => {
  const encryptString = encryptMD5('teste123');

  expect(encryptString).toContain(testPassword);
});
