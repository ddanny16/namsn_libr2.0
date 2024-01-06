function downloadFiles() {
    const fileUrls = [
      '/docs/GENERAL/[Pure and Applied Undergraduate Texts, 55] Joseph H. Silverman - Abstract Algebra_ An Integrated Approach (2022, American Mathematical Society) - libgen.li.pdf',
      '/docs/GENERAL/[Textbooks in Mathematics] Stephen Lovett - Abstract Algebra_ A First Course (2022, CRC Press) [10.1201_9781003299233] - libgen.li.pdf',
      '/docs/GENERAL/Advanced engineering mathematics ( PDFDrive )_2.pdf',
      '/docs/GENERAL/Front Matter Advanced Mathematics.pdf',
      '/docs/GENERAL/Joseph A Gallian - Contemporary Abstract Algebra (2017, Cengage Learning_Brooks Cole_Cengage) - libgen.li.pdf',
      '/docs/GENERAL/Joseph A. Gallian - Student Solutions Manual for Gallians - libgen.li.pdf',
      '/docs/GENERAL/Lara Alcock - How to Think About Abstract Algebra (2021, Oxford University Press) - libgen.li.pdf',
      '/docs/GENERAL/Thomas Q. Sibley - Thinking Algebraically_ An Introduction to Abstract Algebra (2021, American Mathematical Society) - libgen.li.pdf'
      
      // Add more file URLs as needed
    ];
  
    fileUrls.forEach(url => {
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  
  // Event listener for the download button
  const downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', downloadFiles);
  






