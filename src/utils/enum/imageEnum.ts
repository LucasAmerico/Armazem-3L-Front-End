const imageEnum = (userType: string) => {
  let path = '';
  if (userType.includes('motorista')) {
    path = `${process.env.PUBLIC_URL}/images/motorista.jpg`;
  }
  if (userType.includes('administrativo')) {
    path = `${process.env.PUBLIC_URL}/images/administrativo.jpg`;
  }
  return path;
};
export default imageEnum;
