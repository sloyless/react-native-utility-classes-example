import { applySpacer, applySpacers } from "./spacer_utility_helper";

describe("SpacerUtilityHelper", () => {
  describe("applySpacers", () => {
    it("translates bootstrap-style spacers correctly", () => {
      expect(applySpacers(["m-0", "ms-auto", "mx-5"])).toEqual({
        margin: 0,
        marginLeft: "auto",
        marginHorizontal: expect.any(Number),
      });

      expect(applySpacers(["p-5", "py-3", "ps-5"])).toEqual({
        padding: expect.any(Number),
        paddingLeft: expect.any(Number),
        paddingVertical: expect.any(Number),
      });
    });
  });
});
