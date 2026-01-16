function passwordChecker(password) {
  if (password.length < 8) {
    return false;
  }

  if (!/[0-9]/.test(password)) {
    return false;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return false;
  }

  if (password.toLowerCase().includes("ipl")) {
    return false;
  }

  return true;
}

module.exports = passwordChecker;