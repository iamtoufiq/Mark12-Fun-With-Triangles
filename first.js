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
    {
      // 6666666666666666666666666
      question:
        "Two triangles are similar.  If the ratio of the perimeters is 5 : 3, find the ratio of the corresponding sides.",
      answers: {
        a: "20°",
        b: "10°",
        c: "30°",
        d: "40°",
      },
      correctAnswer: "d",
    },
    {
      // 777777777777777777777
      question:
        "One of the angle of the right-angled triangle is double the other. Find the area of the triangle if the hypotenuse is 16 cm.",
      answers: {
        a: "30√3",
        b: "32",
        c: "40√2",
        d: "32√3",
      },
      correctAnswer: "d",
    },
    {
      // 88888888888888
      question:
        "The perimeter of an isosceles triangle is 50 cm. If the base is 18 cm, then find the length of the equal sides.",
      answers: {
        a: "18 cms",
        b: "20 cms",
        c: "16 cms",
        d: "12 cms",
      },
      correctAnswer: "c",
    },
    {
      // 99999999999999999999
      question:
        "In an isosceles triangle ABC, if AB = AC = 26 cm and BC = 20 cm, find the area of triangle ABC. ",
      answers: {
        a: "180 cm",
        b: "240 cm",
        c: "220 cm",
        d: "260 cm",
      },
      correctAnswer: "b",
    },
    {
      // 101010
      question:
        "The area of ΔABC is 63 sq. units. Two parallel lines DE, FG, are drawn such that they divide the line segments AB and AC into three equal parts. What is the area of the quadrilateral DEGF?",
      answers: {
        a: "28 sq. units",
        b: "35 sq. units",
        c: "21 sq. units",
        d: "48 sq. units",
      },
      correctAnswer: "c",
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
