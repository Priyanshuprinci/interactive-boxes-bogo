 const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
    const boxes = document.querySelectorAll('.box');

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        boxes.forEach(box => box.classList.remove('expanded'));
        const selectedBox = radio.closest('.box');
        selectedBox.classList.add('expanded');
      });
    });