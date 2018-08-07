import splitToLowerCase from "./index"

describe("splitToLowerCase", () => {
  it("Should return All when given SHOW_ALL", () => {
    expect(splitToLowerCase("SHOW_ALL")("_")).toEqual("All")
  })

  it("Should return Active when given SHOW_ACTIVE", () => {
    expect(splitToLowerCase("SHOW_ACTIVE")("_")).toEqual("Active")
  })

  it("Should return Completed when given SHOW_COMPLETED", () => {
    expect(splitToLowerCase("SHOW_COMPLETED")("_")).toEqual("Completed")
  })
})
