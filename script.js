/* ================= PASSWORD PAGE ================= */

function checkPassword() {
    const passInput = document.getElementById("password");
    const error = document.getElementById("error");

    if (passInput && passInput.value === "18/06/22") {
        window.location.href = "page2.html";
    } else if (error) {
        error.innerText = "Wrong date ❤️";
    }
}


/* ================= TYPEWRITER (PAGE 2) ================= */

const text = "sho boudhyba wlh naarf l shn9oulou tw zeyd alkhr bnsba lik wlh laadhym wlhhh ama amnkkk o9sm bleh habitk brshaaaa wlh b eli sar rny mnish 9a3d nouj3 fik khw wlh rny 9a3d no9tl f rhy ena zda wlh wblh9 mnhbsh nb9w hka jmlaaa wlh nhb ay hal wnaarf l lhal hdha basit alkhrrr khtrk enty mkntsh talba mni shy saayb just knt talba mny nkn abed loyal lik wn3ishou frhnyn bsh nkoun bou behy al a9al lrayhane wnaarf l ena hdha m799tush le fl frsa loula mnk le f thenya le f theltha le f rab3a le wle wle wleee wlh naarf hdha wnaarf l mnst79 hta frsa w eli f kl lhdha nraw l ena bdit ntbdl hta shwy tsir hja trjaana l 0 w t2kdlk l ena mtbdltsh w 3mry m ntbdl ama wlh sd9ni nhb ntbdl wlh wlmra hdhy wlh nhb nbda b klshy shih wlh nhb nkn sari7 m3ak f klshy se3a 9bal ay hja w mnha nbda nsl7 mn rhy wlh khtr naarf l adhika awl etape wlhhh mst3d amnkk naatyk l insta wl facebook wl whatsapp wklshy wlh lmhm thes enty b ra7a wmtb9ash f kl lhdha tkhmm l mzl adhka hwa rayen lmrhz wlhhhh mst3d naaml ay hja thssk bl 2amen wlh blh9 smhny whdha raba3 3id hob lina m3a b3dhna wn3rf ymkn 3shna zouz khw jwhm bhy wwlh bnsba lya 3mnwl kenli as3ed ayem hyety wlh blh9 smhny ala eli sar 9ablou wb3dou wlh wlh wnhb ns2lk s2el rghm naarf jawebou wmsh shnloumk jmla wlh ama amnkkkkk will you be my valentine ?";

let i = 0;

function typeWriter() {
    const element = document.getElementById("typewriter");

    if (element && i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    } else {
        const startBtn = document.getElementById("startBtn");
        if (startBtn) {
            startBtn.style.display = "inline-block";
        }
    }
}

if (document.getElementById("typewriter")) {
    typeWriter();
}


/* ================= LETTER PAGE ================= */

const letter = "My love, mn 18 June 2022 wlh ltw hobi lik 9a3d yzid alkhrrrrr wlh rghm l sar lkl wrghm tsrfty wlh wlh sd9ni saat nhes rhy abed mhboul wla dekhl f hyt wla mrydh wla wlh le naarf khtr o9sm bleh sd9ni l aamltu lkl m aandu hta aale9a b eli nhs fih wlh laaadhym jmla jmla o9sm bleh nktblk fl klem hdha wmttswrsh sh9a3d nhs maah wlh nhb n9olk nhbk brshaaa bdhyba wsmhny ala kl wji3a khalitk thes byha w ala ehss lkorh b dhet l thes fih wlh laadhym enty hyety lkl ritk bnty wlh wlhhh wshnb9a dima nrak akeka wnrdha lwji3a l rhy wmnrdhhsh fik wlh rnym wlh blh9 smhny wnchlh tkoun 3jbetk lfza 3l a9al wlh khtr naarf l asln s3ib brshaaaa tkoun andha hta rbo3 t2thyr wlh bl akhas b3d l hsytu w eli thes byh ama sd9ni mli rwht w ena n7dhr fih wlh jetni lfkra 9bila wlh rwht njri w ena nheb n3mlha wlh nchlh tkn farhetk hta shwy wlh 9a3d nhb nl9a ay hja tnjm tfrhk f lhdha hdhy bdhet khtr naarf 9adeksh mst79tha tw wlhhh bdhybty nhbk brshaaaaa wnchlh yrby nrak dima frhna wlh ❤️❤️❤️";

let j = 0;

function typeLetter() {
    const element = document.getElementById("letterText");

    if (element && j < letter.length) {
        element.innerHTML += letter.charAt(j);
        j++;
        setTimeout(typeLetter, 40);
    }
}

if (document.getElementById("letterText")) {
    typeLetter();
}


/* ================= PAGE NAVIGATION ================= */

function goToMemories() {
    window.location.href = "memories.html";
}

function goToLetter() {
    window.location.href = "letter.html";
}


/* ================= ROMANTIC TIME COUNTER ================= */

function updateCounter() {

    const startDate = new Date("June 18, 2022 00:00:00");
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diffMs = now - startDate;
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const totalSeconds = Math.floor(diffMs / 1000);

    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    const counter = document.getElementById("timeCounter");

    if (counter) {
        counter.innerHTML =
            "💖 " +
            years + " Years • " +
            months + " Months • " +
            days + " Days • " +
            minutes + " Minutes • " +
            seconds + " Seconds 💖";
    }
}

/* Start counter only if element exists */
if (document.getElementById("timeCounter")) {
    updateCounter();
    setInterval(updateCounter, 1000);
}
