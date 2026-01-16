const passwordChecker = require("./passwordChecker");

test("Mot de passe valide", () => {
  const result = passwordChecker("Abc!1234");
  expect(result).toBe(true);
});

test("Mot de passe trop court", () => {
  const result = passwordChecker("Ab!12");
  expect(result).toBe(false);
});

test("Mot de passe sans chiffre", () => {
  const result = passwordChecker("Abcdef!@");
  expect(result).toBe(false);
});

test("Mot de passe sans caractère spécial", () => {
  const result = passwordChecker("Abcdef12");
  expect(result).toBe(false);
});

test("Mot de passe contenant IPL", () => {
  const result = passwordChecker("IPL!1234");
  expect(result).toBe(false);
});

test("Mot de passe contenant ipl en minuscule", () => {
  const result = passwordChecker("abcipl!1");
  expect(result).toBe(false);
});