const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const country = document.getElementById('country');
const score = document.getElementById('score');
const add = document.getElementById('add');
const dynamic = document.querySelector('.dynamic-div');

let data = [];

function updateUI() {
    if (data.length === 0) {
        dynamic.innerHTML = "You have extracted all data.";
        return;
    }

    data.sort((a, b) => b.score - a.score);
    let info = "";
    data.forEach((obj, idx) => {
        info += `
            <div class="user-info">
                <span>${idx + 1}</span>
                <span>${obj.name}</span>
                <span>${obj.country}</span>
                <span>${obj.score}</span>
                <div class="btns">
                    <button type="button">+5</button>
                    <button type="button">X</button>
                    <button type="button">-5</button>
                </div>
            </div>
        `;
    });
    dynamic.innerHTML = info;
    buttonWorking();
}

function buttonWorking() {
    document.querySelectorAll('.btns').forEach((ele, idx) => {
        ele.addEventListener('click', (event) => {
            if (event.target.innerText === "+5") data[idx].score += 5;
            else if (event.target.innerText === "-5") data[idx].score -= 5;
            else data.splice(idx, 1);
            updateUI();
        });
    });
}

add.addEventListener('click', () => {
    if (fname.value === '' || lname.value === '' || country.value === '' || score.value === '') {
        alert('Enter All Information Of The Contestant');
        return;
    }
    else {
        let obj = {
            name : `${fname.value} ${lname.value}`,
            country : country.value,
            score : +score.value
        };
        data.push(obj);
        updateUI();
    }

    fname.value = '';
    lname.value = '';
    country.value = '';
    score.value = '';
});