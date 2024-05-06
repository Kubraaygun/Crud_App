const Form = ({ addUser }) => {
  //form gonderilince
  const handleSubmit = (e) => {
    e.preventDefault();
    //formdaki inputlardaki degerlerden obje olustur
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());

    console.log(newUser)
    //kullaniciyi tabloya ekle
    addUser(newUser);

    //formu sifirla
    e.target.reset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">İsim</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="or:Mustafa"
        />
      </div>
      <div className="my-4">
        <label htmlFor="mail">Email</label>
        <input
          id="mail"
          type="email"
          name="mail"
          className="form-control"
          placeholder="or:mustafa@business.com"
        />
      </div>
      <div className="my-4">
        <label htmlFor="age">Yas</label>
        <input
          id="age"
          type="number"
          name="age"
          className="form-control"
          placeholder="or:24"
        />
      </div>
      <button>Kullanici Ekle</button>
    </form>
  );
};

export default Form;
