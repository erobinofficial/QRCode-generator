const generateButton = document.querySelector('#generate-button');
      const qrCode = document.querySelector('#qr-code');
      const downloadLink = document.querySelector('#download-link');

      generateButton.addEventListener('click', async () => {
        const url = document.querySelector('#url').value;

        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}`;
        downloadLink.href = qrCode.src;
        downloadLink.style.display = 'inline';
      });