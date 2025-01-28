const faqHeads = document.querySelectorAll('.faq__head');

faqHeads.forEach(head => {
  head.addEventListener('click', () => {
    const faqItem = head.closest('.faq__item');
    const isOpen = faqItem.classList.contains('open');

    if (isOpen) {
      faqItem.classList.remove('open');
      faqItem.querySelector('.faq__text').style.maxHeight = null;
    } else {
      const openFaqItem = document.querySelector('.faq__item.open');
      if (openFaqItem) {
        openFaqItem.classList.remove('open');
        openFaqItem.querySelector('.faq__text').style.maxHeight = null;
      }
      faqItem.classList.add('open');
      faqItem.querySelector('.faq__text').style.maxHeight = `${faqItem.querySelector('.faq__text').scrollHeight}px`;
    }
  });
});

const firstFaqItem = document.querySelector('.faq__item:first-of-type');
firstFaqItem.classList.add('open');
firstFaqItem.querySelector('.faq__text').style.maxHeight = `${firstFaqItem.querySelector('.faq__text').scrollHeight}px`;

const faqButtons = document.querySelectorAll('.faq__btn');
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.blur();
  });
});