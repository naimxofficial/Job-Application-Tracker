//---------------------------------
//Calculate total number of jobs
let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";

let total = document.getElementById("total");
let total2 = document.getElementById("total2");
let interviewTotal = document.getElementById("interviewTotal");
let rejectedTotal = document.getElementById("rejectedTotal");

const allCardSection = document.getElementById("allCards");

function calculateCount() {
    total.innerText = allCardSection.children.length; //8
    total2.innerText = allCardSection.children.length; //8 jobs
    interviewTotal.innerText = interviewList.length; // depends of clicked interview
    rejectedTotal.innerText = rejectedList.length; // depends of clicked rejected
}

calculateCount(); //called
//Calculate total number of jobs
//--------------------------------------------

// --------------------------------------------
//Filter button bg color change on click
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

let noJob = document.getElementById("no-job");
//-----------------------------------------------
function toggleStyle(id) {
    allFilterBtn.classList.add("bg-white");
    interviewFilterBtn.classList.add("bg-white");
    rejectedFilterBtn.classList.add("bg-white");

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove("bg-white");
    selected.classList.add("bg-sky-500");

    // Hide ALL sections + placeholder by default
    allCardSection.classList.add("hidden");
    filterSeciton.classList.add("hidden");
    noJob.classList.add("hidden");

    if (id === "all-filter-btn") {
        allCardSection.classList.remove("hidden");
    } else if (id === "interview-filter-btn") {
        filterSeciton.classList.remove("hidden");
        renderInterview();

        // Show placeholder ONLY when empty
        if (interviewList.length === 0) {
            noJob.classList.remove("hidden");
        }
    } else if (id === "rejected-filter-btn") {
        filterSeciton.classList.remove("hidden");
        renderRejected();

        // Show placeholder ONLY when empty
        if (rejectedList.length === 0) {
            noJob.classList.remove("hidden");
        }
    }

    calculateCount();
    updateJobCountDisplay();
}
const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("interview-btn")) {
        const parentNode = event.target.parentNode.parentNode;
        const company = parentNode.querySelector(".company").innerText;
        const skill = parentNode.querySelector(".skill").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const deleteBtn = parentNode.querySelector(".deleteBtn").innerHtml;

        parentNode.querySelector(".status").innerText = "Interview";

        const cardInfo = {
            company,
            skill,
            salary,
            status: "Interview",
            description,
            deleteBtn,
        };

        const companyExist = interviewList.find(
            (item) => item.company == cardInfo.company,
        );

        rejectedList = rejectedList.filter(
            (item) => item.company != cardInfo.company,
        );
        if (!interviewList.some((item) => item.company === cardInfo.company)) {
            interviewList.push(cardInfo);
        }
        calculateCount();
        if (currentStatus === "interview-filter-btn") {
            renderInterview();
        } else if (currentStatus === "rejected-filter-btn") {
            renderRejected();
        }
        updateJobCountDisplay();
    } else if (event.target.classList.contains("rejected-btn")) {
        const parentNode = event.target.parentNode.parentNode;
        const company = parentNode.querySelector(".company").innerText;
        const skill = parentNode.querySelector(".skill").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const deleteBtn = parentNode.querySelector(".deleteBtn").innerHtml;

        parentNode.querySelector(".status").innerText = "Rejected";

        const cardInfo = {
            company,
            skill,
            salary,
            status: "Rejected",
            description,
            deleteBtn,
        };

        if (!rejectedList.some((item) => item.company === cardInfo.company)) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(
            (item) => item.company != cardInfo.company,
        );
        calculateCount();
        if (currentStatus === "interview-filter-btn") {
            renderInterview();
        } else if (currentStatus === "rejected-filter-btn") {
            renderRejected();
        }
        updateJobCountDisplay();
    }
});

const filterSeciton = document.getElementById("filtered-section");

function renderInterview() {
    filterSeciton.innerHTML = "";

    for (let interview of interviewList) {
        let div = document.createElement("div");
        div.classList = "p-6 space-y-4 bg-white relative";
        div.innerHTML = `<button class="deleteBtn btn rounded-full border-1 border-[#64748B] absolute right-6 p-2"><i
          class="fa-regular fa-trash-can "></i></button>
      <h3 class="company text-[#002C5C] font-semibold text-[18px]">${interview.company}</h3>
      <p class="skill text-[#64748B]">${interview.skill}</p>
      <p class="salary text-[#64748B] text-[14px]">${interview.salary}</p>
      <div><span class="inline apply status py-2 px-3 text-[#002C5C] text-[14px] bg-[#EEF4FF] font-medium ">${interview.status}</span></div>
      <p class="description text-[#323B49] text-[14px]">${interview.description}</p>
      <!-- Interview and Reject button  -->
      <div class="space-x-2">
        <button
          class="py-2 px-3 text-[14px] font-semibold text-[#10B981] rounded border-1 border-green-500 btn interview-btn">INTERVIEW</button>
        <button
          class="py-2 px-3 text-[14px] font-semibold text-[#EF4444] rounded border-1 border-red-500 btn rejected-btn">REJECTED</button>
      </div>`;
        filterSeciton.appendChild(div);
    }
}
function renderRejected() {
    filterSeciton.innerHTML = "";

    for (let reject of rejectedList) {
        let div = document.createElement("div");
        div.classList = "p-6 space-y-4 bg-white relative";
        div.innerHTML = `<button class="deleteBtn btn rounded-full border-1 border-[#64748B] absolute right-6 p-2"><i
          class="fa-regular fa-trash-can "></i></button>
      <h3 class="company text-[#002C5C] font-semibold text-[18px]">${reject.company}</h3>
      <p class="skill text-[#64748B]">${reject.skill}</p>
      <p class="salary text-[#64748B] text-[14px]">${reject.salary}</p>
      <div><span class="inline apply status py-2 px-3 text-[#002C5C] text-[14px] bg-[#EEF4FF] font-medium ">${reject.status}</span></div>
      <p class="description text-[#323B49] text-[14px]">${reject.description}</p>
      <!-- Interview and Reject button  -->
      <div class="space-x-2">
        <button
          class="py-2 px-3 text-[14px] font-semibold text-[#10B981] rounded border-1 border-green-500 btn interview-btn">INTERVIEW</button>
        <button
          class="py-2 px-3 text-[14px] font-semibold text-[#EF4444] rounded border-1 border-red-500 btn rejected-btn">REJECTED</button>
      </div>`;
        filterSeciton.appendChild(div);
    }
}

function updateJobCountDisplay() {
    const countSpan = document.getElementById("total2");

    let count = 0;
    let label = "jobs";

    if (currentStatus === "all-filter-btn") {
        count = allCardSection.children.length;
    } else if (currentStatus === "interview-filter-btn") {
        count = interviewList.length;
    } else if (currentStatus === "rejected-filter-btn") {
        count = rejectedList.length;
    }

    countSpan.textContent = count;
}
