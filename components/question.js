const question = function (question, index) {
  const questionEl = document.createElement("div");

  questionEl.innerHTML = `
      <div class="    relative
                      px-6
                      py-3
                      mb-6">
            <p class="text-[1.1rem]
                      select-none 
                      leading-[1.4rem]
                      text-gray-700
                      font-semibold" >
                      Question ${index + 1} : ${question.content}  - 
                      
                      <span class='font-thin italic'>
                      ${question.score} score
                      </span>

                      ${
                        question.correctAnswers.length > 1
                          ? "<span class='text-red-400'>(Select many answer)</span>"
                          : ""
                      }
            </p>
            <img id="img-tick"
             src="/static/images/tick.png" class="hidden absolute
                               top-[-60%]
                               right-[-15px]
                               w-[100px]"  alt="">
             <img id="img-time"
              src="/static/images/time.png" class="hidden absolute
                               top-[-40%]
                               right-[-15px]
                               w-[80px]"  alt="">   
      </div>

  `;
  return questionEl;
};

export default question;
