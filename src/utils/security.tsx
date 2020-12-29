import MD5 from 'crypto-js/md5';

const encryptMD5 = (value: string) => {
  return MD5(value).toString();
};
export default encryptMD5;
