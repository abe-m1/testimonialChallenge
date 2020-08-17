const testimonialText = document.querySelector('.testimonial-text');
const testimonialAuthor = document.querySelector('.testimonial-author');
const testimonialPosition = document.querySelector('.testimonial-position');
const testimonialImage = document.querySelector('.profile-image');

let prev = document.querySelector('.card__button-prev');
let next = document.querySelector('.card__button-next');

let counter = 0;

const data = [
  {
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer',
    image: './images/image-john.jpg',
  },
  {
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    name: 'Tanya Sinclair',
    title: 'UX Engineer',
    image: './images/image-tanya.jpg',
  },
];

next.addEventListener('click', () => {
  if (data.length === counter || counter < 0) {
    counter = 0;
  }

  testimonialText.innerHTML = data[counter].text;
  testimonialAuthor.innerHTML = data[counter].name;
  testimonialPosition.innerHTML = data[counter].title;
  testimonialImage.src = data[counter].image;
  counter++;
});

prev.addEventListener('click', () => {
  if (counter < 0 || counter === data.length) {
    counter = data.length - 1;
  }

  testimonialText.innerHTML = data[counter].text;
  testimonialAuthor.innerHTML = data[counter].name;
  testimonialPosition.innerHTML = data[counter].title;
  testimonialImage.src = data[counter].image;
  counter--;
});
