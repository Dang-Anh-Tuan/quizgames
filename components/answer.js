const answer = function (id, content, idQuestion, type) {
  const answerEl = document.createElement("div");

  answerEl.innerHTML = `
     <div >
                <input type="${type}" 
                         name="${idQuestion}" 
                         id="a-${id}"
                         class="input-answer
                                hidden
                                peer
                                noSelect"
                         value="${content}">
                <label for="a-${id}" class="block
                                      w-full
                                      h-auto
                                      text-[1.1rem]
                                      select-none 
                                      leading-[1.4rem]
                                      cursor-pointer
                                      px-6
                                      py-3
                                      rounded-[20px]
                                      shadow-xl
                                    bg-white
                                      bg-opacity-90
                                      mb-5
                                      border-[3px]
                                      border-transparent
                                    hover:border-[#b4e0ff]
                                      peer-checked:bg-primary-nav
                                    peer-checked:text-white
                                    peer-checked:border-[#b4e0ff]
                                    noSelect
                                    
                                      " 
                >${content}</label>
              </div>
  `;

  return answerEl;
};

export default answer;
