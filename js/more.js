const downloadButton1 = document.getElementById('downloadButton1');


const fileURL = '/documents/MTS/MTS 101/2021-2022-MTS-101-FURTHER-NOTE1.pdf';


downloadButton1.addEventListener('click', function () {

    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL;
    downloadLink.download = '/documents/MTS/MTS 101/2021-2022-MTS-101-FURTHER-NOTE1.pdf';


    document.body.appendChild(downloadLink);


    downloadLink.click();


    document.body.removeChild(downloadLink);
});

// 2
// 2
// 2
const downloadButton2 = document.getElementById('downloadButton2');

const fileURL1 = '/documents/MTS/MTS 101/2021-2022-MTS-101-FURTHER-NOTE2.pdf';


downloadButton2.addEventListener('click', function () {

    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL1;
    downloadLink.download = '/documents/MTS/MTS 101/2021-2022-MTS-101-FURTHER-NOTE2.pdf';


    document.body.appendChild(downloadLink);


    downloadLink.click();


    document.body.removeChild(downloadLink);
});

// 3
// 3
// 3

const downloadButton3 = document.getElementById('downloadButton3');

const fileURL2 = '/documents/MTS/MTS 101/2021-2022-MTS-101-FURTHER-NOTE3.pdf';


downloadButton3.addEventListener('click', function () {

    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL2;
    downloadLink.download = '/documents/MTS/MTS 101/2021-2022-MTS-101-FURTHER-NOTE3.pdf';


    document.body.appendChild(downloadLink);


    downloadLink.click();


    document.body.removeChild(downloadLink);
});

// 4
// 4
// 4
const downloadButton4 = document.getElementById('downloadButton4');

const fileURL3 = '/documents/MTS/MTS 101/2021-2022-MTS-101-VIRTUAL-LECTURE-NOTE (1).pdf';


downloadButton4.addEventListener('click', function () {

    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL3;
    downloadLink.download = '/documents/MTS/MTS 101/2021-2022-MTS-101-VIRTUAL-LECTURE-NOTE (1).pdf';


    document.body.appendChild(downloadLink);


    downloadLink.click();


    document.body.removeChild(downloadLink);
});

// 5
// 5
// 5
const downloadButton5 = document.getElementById('downloadButton5');

const fileURL4 = '/documents/MTS/MTS 101/2021-2022-MTS-101-VIRTUAL-LECTURE-NOTE.pdf';


downloadButton5.addEventListener('click', function () {

    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL4;
    downloadLink.download = '/documents/MTS/MTS 101/2021-2022-MTS-101-VIRTUAL-LECTURE-NOTE.pdf';


    document.body.appendChild(downloadLink);


    downloadLink.click();


    document.body.removeChild(downloadLink);
});

// 6
// 6
// 6.....

function downloadFiles1() {
    const fileUrls1 = [
        '/documents/MTS/MTS 101/SET THEORY 1 IMPACT SIMPLIFIED.pdf',
        '/documents/MTS/MTS 101/SETS.pdf',
        '/documents/MTS/MTS 101/Pure Mathematics for Advanced Level ( PDFDrive ).pdf'

    ];

    fileUrls1.forEach(url => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Event listener for the download button
const downloadButton6 = document.getElementById('downloadButton6');
downloadButton6.addEventListener('click', downloadFiles1);

// 7
// 7
// 7
const downloadButton7 = document.getElementById('downloadButton7');

const fileURL5 = '/documents/MTS/MTS 101/indices, logarithm and surd p.d.f.pdf';


downloadButton7.addEventListener('click', function () {

    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL5;
    downloadLink.download = '/documents/MTS/MTS 101/indices, logarithm and surd p.d.f.pdf';


    document.body.appendChild(downloadLink);


    downloadLink.click();


    document.body.removeChild(downloadLink);
});


// 8
// 8
// 8
// 8
const downloadButton8 = document.getElementById('downloadButton8');

const fileURL6 = '/documents/MTS/MTS 101/MTS101_Complex_Number (1).pdf';


downloadButton8.addEventListener('click', function () {

    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL6;
    downloadLink.download = '/documents/MTS/MTS 101/MTS101_Complex_Number (1).pdf';


    document.body.appendChild(downloadLink);


    downloadLink.click();


    document.body.removeChild(downloadLink);
});

// 9
// 9
// 9
const downloadButton9 = document.getElementById('downloadButton9');

const fileURL7 = '/documents/MTS/MTS 101/5 polynomial.pdf';


downloadButton9.addEventListener('click', function () {

    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL7;
    downloadLink.download = '/documents/MTS/MTS 101/5 polynomial.pdf';


    document.body.appendChild(downloadLink);


    downloadLink.click();


    document.body.removeChild(downloadLink);
});
// 10
// 10
// 10

function downloadFiles2() {
    const fileUrls2 = [
        '/documents/MTS/MTS 101/475_MTS101.pdf',
        '/documents/MTS/MTS 101/Higher Engineering Mathematics ( PDFDrive.com ).pdf',
        '/documents/MTS/MTS 101/MTS 101 manual.pdf',
        '/documents/MTS/MTS 101/MTS 101.pdf',
        '/documents/MTS/MTS 101/~$MTS 101 PART 4(MODULE 1).pptx',
        '/documents/MTS/MTS 101/~$MTS 101 PART 4(MODULE 2).pptx',
        '/documents/MTS/MTS 101/Mts 101 part 4(module 3).pptx',
        '/documents/MTS/MTS 101/MTS101lecturenote.pdf',
        '/documents/MTS/MTS 101/MTS 101 PART 4(MODULE 1).pptx',
        '/documents/MTS/MTS 101/MTS 101 PART 4(MODULE 2).pptx',
        '/documents/MTS/MTS 101/MTS101 Lecture.pdf',



    ];

    fileUrls2.forEach(url => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Event listener for the download button
const downloadButton10 = document.getElementById('downloadButton10');
downloadButton10.addEventListener('click', downloadFiles2);

//   11
//   11
//   11
function downloadFiles3() {
    const fileUrls3 = [
        '/documents/MTS/MTS 101/MTS 101 ALGEBRA- FUNAAB TEMPLATE.pdf',
        '/documents/MTS/MTS 101/PROF AGBOOLA ALGEBRA.pdf',
        '/documents/MTS/MTS 101/MATRICES.docx',




    ];

    fileUrls3.forEach(url => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}


const downloadButton11 = document.getElementById('downloadButton11');
downloadButton11.addEventListener('click', downloadFiles3);

//   12
//   12
//   12
//   12
function downloadFiles4() {
    const fileUrls4 = [
        '/documents/MTS/MTS 101/CHECKUP ASS IMPACT SIMPLIFIED.pdf',
        '/documents/MTS/MTS 101/MTS 101 Past Questions-1.pdf',
        '/documents/MTS/MTS 101/MTS 101 SELF CHECK UP PROBLEM.pdf',
        '/documents/MTS/MTS 101/MTS101_practics_problem_2.pdf',
        '/documents/MTS/MTS 101/MTS101 TUT QUES IMPACT SIMPLIFIED.pdf',
        '/documents/MTS/MTS 101/RIGOROUS ASSIGNMENT IMPACT SIMPLIFIED.pdf',




    ];

    fileUrls4.forEach(url => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}


const downloadButton12 = document.getElementById('downloadButton12');
downloadButton12.addEventListener('click', downloadFiles4);

// MTS102
// MTS102
// MTS102
