const testInfoComment = function (comment) {
  const testInfoCommentEl = document.createElement("div");

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const createdTime = new Date(comment.createdTime);
  const year = createdTime.getFullYear();
  const month = monthNames[createdTime.getMonth()];
  const day = createdTime.getDate();
  let hour = createdTime.getHours();
  hour = hour < 10 ?  `0${hour}` : hour
  let minute = createdTime.getMinutes();
  minute = minute < 10 ?  `0${minute}` : minute

  const dateFormate = `${hour}:${minute} ${day} ${month} ${year}`;

  testInfoCommentEl.innerHTML = `
    <div class="comment-item bg-gray-200 py-2 px-6 rounded-[25px] mb-4 w-fit dark:bg-dark-white-light">
             <div class="flex justify-between items-center min-w-[200px]"> 
                <p class="select-none font-semibold text-[1.1rem] dark:text-white">
                  ${comment.email}
                </p>
                <span class="ml-3 text-[0.9rem] text-gray-500 font-thin italic dark:text-white">
                  ${dateFormate}
                </span>
              </div>
            <p class="leading-[1.4rem] dark:text-white">${comment.content}</p>
          </div>
  `;

  return testInfoCommentEl;
};

export default testInfoComment;
