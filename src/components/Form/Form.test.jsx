import { render,screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

test("formu gonderince 'addUser' dogru parametrelerle calisiyor mu? ", async () => {
  //Fonksiyonu mocklama (Taklit fonksiyonu olusturma)
  //kac kez cagrildi | hangi parametrelerle cagrildi
  //tarzinda testleri yapmamizi saglayan orj/ fonksiyonu taklit eden yapi
  const mockFn = vi.fn();

  //user kurulumu yap
  const user = userEvent.setup();

  //bileseni ekrana bas
  render(<Form addUser={mockFn} />);
  //1-gerekli elemanlari cagir
  const nameInp = screen.getByLabelText("Isim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByPlaceholderText("or:24");
  const sendBtn = screen.getByRole("button");
  //2-inputlari doldur

  //yol1 = isim inputunu doldur
  await user.click(nameInp);
  await user.keyboard('firat');
  //yol2=mail inputunu doldur
  await user.type(mailInp, "firat@gmail.com");
  await user.type(ageInp, "25");
  //3-gonder butonuna tikla
  await user.click(sendBtn);
  //4-addUser dogru parametrelerle cagrildi mi
  expect(mockFn).toHaveBeenCalledWith({
    name:"firat",
    mail:"firat@gmail.com",
    age:"25"
  })
});
