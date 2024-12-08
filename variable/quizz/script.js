document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("quiz-container");
  let e = document.getElementById("quiz-title"),
    t = document.getElementById("quiz-questions"),
    s = document.getElementById("submit-btn"),
    l = document.getElementById("reset-btn");

  e.querySelector("span").textContent = quizData.quizTitle;
  let a = quizData.quizTitle;
  function n() {
    let e = JSON.parse(localStorage.getItem(a));
    e &&
      (e.forEach((e, s) => {
        let l = Array.from(
          document.querySelectorAll(`input[data-question-index="${s}"]`)
        );
        l.forEach((t) => {
          e.checked.includes(t.value) && (t.checked = !0),
            e.correct.includes(t.value) && !t.checked
              ? t.parentElement.classList.add("text-green-300")
              : t.checked && e.correct.includes(t.value)
              ? t.parentElement.classList.add("text-green-600")
              : t.checked && t.parentElement.classList.add("text-red-600");
        });
        let a = t.children[s].querySelector(".message");
        (a.textContent = e.message),
          a.classList.add(
            "show",
            e.isCorrect ? "text-green-500" : "text-red-500"
          );
      }),
      document.querySelectorAll("input[type='checkbox']").forEach((e) => {
        e.disabled = !0;
      }));
  }
  function d(e) {
    localStorage.setItem(a, JSON.stringify(e));
  }
  quizData.questions.forEach((e, s) => {
    let l = document.createElement("div");
    l.classList.add("mb-4");
    let a = document.createElement("h2");
    (a.textContent = `${s + 1}. ${e.question}`),
      a.classList.add("mb-2", "bold-color"),
      l.appendChild(a),
      e.options.forEach((e) => {
        let t = document.createElement("label");
        t.classList.add("block", "mb-2");
        let a = document.createElement("input");
        (a.type = "checkbox"),
          (a.value = e),
          (a.dataset.questionIndex = s),
          a.classList.add("mr-2"),
          t.appendChild(a),
          t.appendChild(document.createTextNode(e)),
          l.appendChild(t);
      });
    let n = document.createElement("div");
    n.classList.add("mt-2", "text-sm", "message"),
      l.appendChild(n),
      t.appendChild(l);
  }),
    n(),
    s.addEventListener("click", () => {
      quizData.questions.length;
      let e = [];
      quizData.questions.forEach((s, l) => {
        let a = Array.from(
            document.querySelectorAll(
              `input[data-question-index="${l}"]:checked`
            )
          ),
          n = Array.from(
            document.querySelectorAll(`input[data-question-index="${l}"]`)
          ),
          d = s.correctAnswers,
          c = !0;
        a.forEach((e) => {
          d.includes(e.value)
            ? e.parentElement.classList.add("text-green-600")
            : (e.parentElement.classList.add("text-red-600"), (c = !1));
        }),
          n.forEach((e) => {
            d.includes(e.value) &&
              !e.checked &&
              e.parentElement.classList.add("text-green-300");
          }),
          (a.length === d.length && a.every((e) => d.includes(e.value))) ||
            (c = !1);
        let r = t.children[l].querySelector(".message");
        c
          ? ((r.textContent = s.successMessage),
            r.classList.add("show", "text-green-500"),
            r.classList.remove("text-red-500"))
          : ((r.textContent = s.failureMessage),
            r.classList.add("show", "text-red-500"),
            r.classList.remove("text-green-500")),
          e.push({
            checked: a.map((e) => e.value),
            correct: d,
            isCorrect: c,
            message: c ? s.successMessage : s.failureMessage,
          });
      }),
        document.querySelectorAll("input[type='checkbox']").forEach((e) => {
          e.disabled = !0;
        }),
        d(e);
    }),
    l.addEventListener("click", () => {
      localStorage.removeItem(a), location.reload();
    });
});
