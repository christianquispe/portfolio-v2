import { getDateByISO, orderByDate, validateDate } from "@/utils/functions";

describe("Utils/Functions", () => {
  it("getDateByISO", () => {
    const mockDate = "2022-07-08T11:32:04.339Z";
    expect(getDateByISO(mockDate)).toBe("2022-07-08");
  });
  it("validateDate - error", () => {
    const mockDate = "203232-02-2022";
    expect(validateDate(mockDate)).toBe(false);
  });
  it("validateDate - success", () => {
    const mockDate = "2022-02-20";
    expect(validateDate(mockDate)).toBe(true);
  });
  it("order by date", () => {
    const mockArr = [
      { title: "Second post", date: "2022-03-22" },
      { title: "First post", date: "2022-03-21" },
      { title: "Cuarto post", date: "2024-03-24" },
      { title: "Tercer post", date: "2023-03-23" },
    ];
    const resultExpected = [
      { title: "First post", date: "2022-03-21" },
      { title: "Second post", date: "2022-03-22" },
      { title: "Tercer post", date: "2023-03-23" },
      { title: "Cuarto post", date: "2024-03-24" },
    ];
    expect(orderByDate(mockArr)).toEqual(resultExpected);
  });
});
