const { versionCompare } = require("../src/index.ts");

const testVersions = {
    version1: "1.22.1",
    version2: "1.22",
};
test("版本号对比：1.22.1 > 1.22", () => {
    expect(versionCompare(testVersions)).toBe(1);
});
