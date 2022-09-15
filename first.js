const page = document.body.id;
// console.log(page);
switch (page) {
  // quiz will run
  case "quiz":
    ourQuizfunction();
    break;
  case "triangle":
    // triangle will run
    ourTriangle();
    break;
  case "area":
    // area will run
    ourAreaFunction();
    break;
  case "hypotenuse":
    // hypotenuse will run
    ourhypotenuse();
    break;
}

function ourhypotenuse() {
  const a = document.getElementById("input-one");
  const b = document.getElementById("input-two");
  const button = document.querySelector("button");
  const finalScoreA = document.querySelector(".score_h1-a");

  button.addEventListener("click", () => {
    const s1 = parseInt(a.value);
    const s2 = parseInt(b.value);
    if (s1 > 0 && s2 > 0) {
      const result = Math.sqrt(Math.pow(s1, 2) + Math.pow(s2, 2));
      finalScoreA.innerHTML = `Hypotenuse is ${result.toFixed(2)}`;
    } else {
      finalScoreA.innerHTML = `Please enter proper values 😐`;
    }
  });
}

function ourAreaFunction() {
  const a = document.getElementById("input-one");
  const b = document.getElementById("input-two");
  const c = document.getElementById("input-three");
  const button = document.querySelector("button");
  const finalScoreA = document.querySelector(".score_h1-a");
  const finalScoreB = document.querySelector(".score_h1-b");

  button.addEventListener("click", () => {
    const s1 = parseInt(a.value);
    const s2 = parseInt(b.value);
    const s3 = parseInt(c.value);
    if ((s1 > 0) & (s2 > 0) & (s3 > 0)) {
      const p = (s1 + s2 + s3) / 2;

      const result = Math.sqrt(p * (p - s1) * (p - s2) * (p - s3));
      if (result || result > 0) {
        finalScoreA.innerHTML = `Area of triangle is ${result.toFixed(2)}`;
        finalScoreB.innerHTML = "";
      } else {
        finalScoreA.innerHTML = ``;
        finalScoreB.innerHTML = `That is not a Triangle `;
      }
    } else {
      finalScoreA.innerHTML = ``;
      finalScoreB.innerHTML = `Please enter proper values 😐`;
    }
  });
}

function ourTriangle() {
  const a = document.getElementById("input-one");
  const b = document.getElementById("input-two");
  const c = document.getElementById("input-three");
  const button = document.querySelector("button");
  const finalScoreA = document.querySelector(".score_h1-a");
  const finalScoreB = document.querySelector(".score_h1-b");

  button.addEventListener("click", () => {
    let valueA = Number(a.value);
    let valueB = Number(b.value);
    let valueC = Number(c.value);
    if (valueA < 0 || valueB < 0 || valueC < 0) {
      finalScoreA.innerHTML = ``;
      finalScoreB.innerHTML = "Enter proper values 😐";
    } else if (
      parseInt(a.value) + parseInt(b.value) + parseInt(c.value) ===
      180
    ) {
      finalScoreA.innerHTML = `It's a Triangle 🙂`;
      finalScoreB.innerHTML = "";
    } else {
      finalScoreA.innerHTML = ``;
      finalScoreB.innerHTML = "It's not a Triangle 🥺";
    }
  });
}

function ourQuizfunction() {
  const myQuestions = [
    {
      question:
        "A triangle that has no equal sides and no equal angles is known as?",
      answers: {
        a: "isosceles triangle",
        b: "scalene triangle",
        c: "equilateral triangle",
        d: "right angle",
      },
      correctAnswer: "b",
    },
    {
      question:
        "A triangle that has 2 equal sides and 2 equal angles is known as?",
      answers: {
        a: "isosceles triangle",
        b: "equilateral triangle",
        c: "scalene triangle",
        d: "right angle",
      },
      correctAnswer: "a",
    },
    {
      question: "A triangle with the angle of 90 ° is called?",
      answers: {
        a: "vertical triangle",
        b: "supplementary triangle",
        c: "right angle triangle",
        d: "reflective triangle",
      },
      correctAnswer: "c",
    },
    {
      question:
        "A triangle that has 3 equal sides and 3 equal angles is known as?",
      answers: {
        a: "scalene triangle",
        b: "isosceles triangle",
        c: "isosceles triangle",
        d: "equilateral triangle",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Area of a triangle with base b and height h is represented by?",
      answers: {
        a: "1⁄2 × bh",
        b: "2 + bh",
        c: "2 × bh",
        d: "2⁄bh",
      },
      correctAnswer: "a",
    },
  ];
  let marks = 0;

  const quiz = document.querySelector(".quiz");
  const button = document.querySelector(".score_button");
  const finalScore = document.querySelector(".score_h1");

  myQuestions.forEach((item, i) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.classList.add("has-text-grey-dark");
    div.innerHTML = `<p>${i + 1}) ${item.question}</p>
  <label class="radio">
    <input type="radio" value='a' name="${i}" />
    a) ${item.answers.a}
  </label>
  <label class="radio">
    <input type="radio" value='b' name="${i}" />
    b) ${item.answers.b}
  </label>
  <label class="radio">
    <input type="radio" value='c' name="${i}" />
    c) ${item.answers.c}
  </label>
  <label class="radio">
    <input type="radio" value='d' name="${i}" />
    d) ${item.answers.d}
  </label>`;

    quiz.appendChild(div);
  });

  function clickHandler() {
    marks = 0;
    myQuestions.forEach((item, i) => {
      const ans = document.getElementsByName(i);
      for (a = 0; a < 4; a++) {
        if (ans[a].checked) {
          if (ans[a].value === item.correctAnswer) {
            marks++;
          }
        }
      }
    });
    finalScore.innerHTML = `Your score is ${marks}`;
  }

  button.addEventListener("click", clickHandler);
}
