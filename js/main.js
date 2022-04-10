(() => {
   console.log('The team described in this page is totally real and not at all invented for this assignment');

   let sigils = document.querySelectorAll('.iconContainer'),
      houseImages = document.querySelector('#productsImages'),
      houseBio = document.querySelector('.teamMemberInfo'),
      houseName = document.querySelector('.teamMemberName');

   const houseInfo = [
      ["Lysol Premium Lager", `Lysol Hop not only amplifies the taste of existing beer several times, but is also a natural disinfectant that sanitizes almost all bacteria and viruses.

      Lysol and Budweiser have found the possibility of Lysol Hop and launched a new beer brand Lysol Beer based on it.
      `],
      ["Lysol Hop", `This ingredient, named Lysol Hop, can dramatically kill bacteria and viruses up to 99.9%, but is completely harmless to the human body, further increasing the taste of beer through a series of processes.
      `],
      ["Proposes", `This ingredient, named Lysol Hop, can dramatically kill bacteria and viruses up to 99.9%, but is completely harmless to the human body, further increasing the taste of beer through a series of processes.
      `]
   ];

   function animatePicture() {
      houseImages.style.right = `${this.dataset.offset * 600}px`;
      houseName.textContent = `${houseInfo[this.dataset.offset][0]}`;
      houseBio.textContent = `${houseInfo[this.dataset.offset][1]}`;
   }

   sigils.forEach(sigil => sigil.addEventListener('click', animatePicture));
})();