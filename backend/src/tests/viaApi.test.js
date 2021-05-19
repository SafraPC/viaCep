//Simple test model
describe("Zip Tests!", () => {
  it("Variable should be a ZIP formact", () => {
    const verifyCode = (code) => {
      const rgx = /^[0-9]{5}-[0-9]{3}$/;
      return rgx.test(code + "");
    };
    //Verify if the string is correct
    //send as string
    expect(verifyCode("12345-131")).toBe(true);
  });
});
