import Login from '../models/Login.js';

const trackLogin = async (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  const ip = req.ip;

  const browserInfo = getBrowserInfo(userAgent);
  const osInfo = getOSInfo(userAgent);
  const deviceType = getDeviceType(userAgent);

  const login = new Login({
    user: req.user.id,
    browser: browserInfo,
    os: osInfo,
    deviceType,
    ip
  });

  await login.save();

  next();
};

function getBrowserInfo(userAgent) {
  // Implement browser detection logic here
}

function getOSInfo(userAgent) {
  // Implement OS detection logic here
}

function getDeviceType(userAgent) {
  // Implement device type detection logic here
}

export default trackLogin;

