import { render, screen, within } from "@testing-library/react";
import List from ".";

const testUsers = [
  {
    name: "Mehmet",
    mail: "mehmet60@gmail.com",
    age: 60,
  },
  {
    name: "Ayse",
    mail: "ayse@gmail.com",
    age: 20,
  },
  {
    name: "Ali",
    mail: "alihttp@gmail.com",
    age: 30,
  },
];

//gonderilen her bir kullanici icin ekrana satir basilir
it("gonderilen her kullanici icin ekrana satir basilir", () => {
  render(<List users={testUsers} />);

  //table body alanını sec
  const body=screen.getByTestId("table-body")
  //body kismindaki butun satirlari ac
//belirli bir kapsayici icindeki elemanlari secmek icin within
const rows=within(body).getAllByRole('row')
  
console.log(rows.length)
  //satir sayisi users dizisindeki eleman sayisina esit mi kontrol et
  expect(rows).toHaveLength(testUsers.length)
});

//her bir kullanıcı için isim email yaş hücreleri bulunur.
