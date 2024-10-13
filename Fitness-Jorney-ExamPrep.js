function solution() {
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", readInput);

  // Input fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const contactInput = document.getElementById("contact-number");
  const classTypeInput = document.getElementById("class-type");
  const timeInput = document.getElementById("class-time");

  // Card panels
  const preview = document.querySelector(".class-info");
  const confirmPanel = document.querySelector(".confirm-class");

  let name;
  let email;
  let contact;
  let classType;
  let time;

  function readInput(event) {
    event.preventDefault();

    name = nameInput.value;
    email = emailInput.value;
    contact = contactInput.value;
    classType = classTypeInput.value;
    time = timeInput.value;

    if (
      name === "" ||
      email === "" ||
      contact === "" ||
      classType === "" ||
      time === ""
    ) {
      return;
    }

    nextBtn.disabled = true;
    nameInput.value = "";
    emailInput.value = "";
    contactInput.value = "";
    classTypeInput.value = "";
    timeInput.value = "";

    createPreview(name, email, contact, classType, time);
  }

  function createPreview(name, email, contact, classType, time) {
    const element = document.createElement("li");
    element.className = "info-item";
    const article = document.createElement("article");
    article.className = "personal-info";
    article.appendChild(createPara(name));
    article.appendChild(createPara(email));
    article.appendChild(createPara(contact));
    article.appendChild(createPara(classType));
    article.appendChild(createPara(time));
    element.appendChild(article);

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", edit);

    const continueBtn = document.createElement("button");
    continueBtn.className = "continue-btn";
    continueBtn.textContent = "Continue";
    continueBtn.addEventListener("click", continueWithPreview); // Fixed to be attached to the correct button.

    element.appendChild(editBtn);
    element.appendChild(continueBtn);

    preview.appendChild(element);
  }

  function edit() {
    nextBtn.disabled = false;
    nameInput.value = name;
    emailInput.value = email;
    contactInput.value = contact;
    classTypeInput.value = classType;
    timeInput.value = time;

    preview.innerHTML = "";
  }

  function continueWithPreview() {
    const element = preview.querySelector("li");
    element.className = "continue-info";
    confirmPanel.appendChild(element);

    element.querySelector(".edit-btn").remove();
    element.querySelector(".continue-btn").remove();

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cancel-btn";
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", cancel);

    const confirmBtn = document.createElement("button");
    confirmBtn.className = "confirm-btn";
    confirmBtn.textContent = "Confirm";
    confirmBtn.addEventListener("click", confirmAction);

    element.appendChild(cancelBtn);
    element.appendChild(confirmBtn);
  }

  function cancel() {
    nextBtn.disabled = false;
    confirmPanel.innerHTML = "";
  }

  function confirmAction() {
    document.getElementById("main").remove();

    const thankYou = document.createElement("h1");
    thankYou.id = "thank-you";
    thankYou.textContent =
      "Thank you for scheduling your appointment, we look forward to seeing you!";
    const doneBtn = document.createElement("button");
    doneBtn.id = "done-btn";
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", () => {
      location.reload();
    });

    document.body.appendChild(thankYou);
    document.body.appendChild(doneBtn);
  }

  function createPara(content) {
    const p = document.createElement("p");
    p.textContent = content;
    return p;
  }
}