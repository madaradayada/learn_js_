// Цей код зручно використовувати для базової валідації логін-форми.
// Якщо поля не заповнені — з’явиться попередження, а якщо все гаразд — дані виведуться в консоль і форма очиститься.

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const userDetails = { email: email.value, Password: password.value };

  console.log(userDetails);
  event.currentTarget.reset();
}
