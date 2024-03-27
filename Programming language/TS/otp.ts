import speakeasy from 'speakeasy';

function generateOTP(secretKey: string) {
  const token = speakeasy.totp({
    secret: secretKey,
    encoding: 'base32',
  });

  // TOTP通常每30秒过期，我们可以计算剩余时间
  const remainingTime = 30 - (Math.floor(new Date().getTime() / 1000.0) % 30);

  return { token, expires_in: remainingTime };
}

const secretKey = 'YOUR_SECRET_KEY_HERE';
const { token, expires_in } = generateOTP(secretKey);

console.log('Token:', token);
console.log('Expires in:', expires_in, 'seconds');
