import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect } from "vitest";
import App from "./../App";

const multiple = (a, b, c) => {
  return a * b * c;
};

//Bir bilesene veya method ile alakali birden fazla test oldguu zaman
//bu testleri gruplandirmak icin describe kullaniriz

//test()=== it()
describe("Fonksiyon Testleri", () => {
  test("Fonksiyon dogru calisiyor mu ", () => {
    expect(multiple(10, 2, 3)).toBe(60);
  });

  it("Fonksiyon negatif sayilarla dogru calisiyor mu ", () => {
    expect(multiple(-10, -2, -3)).toBe(-60);
  });
});

it("uygulma dogru sekilde calisiyor mu", async () => {
  const user = userEvent.setup();
  render(<App />);
  //gerekli elemanlari cagir
  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Yas");
  const sendBtn = screen.getByRole("button", { name: "Kullanici Ekle" });

  //1-inputlari doldur

  await user.type(nameInp, "veli");
  await user.type(mailInp, "veli@gmail.com");
  await user.type(ageInp, "24");

  //2-kullanici ekle butonuna tikla

  await user.click(sendBtn);
  //3-inputlara girilen verilere uygun tablo hucreleri ekrana basildi mi
  screen.getByRole("cell", { name: "veli" });
  screen.getByRole("cell", { name: "veli@gmail.com" });
  screen.getByRole("cell", { name: "24" });
});
