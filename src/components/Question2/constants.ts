export const genders = [
  ['Female', '👩'],
  ['Male', '👨'],
  ['Other', '😉'],
];

export const animations = {
  initial: { x: '100%', opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  exit: { x: '-100%', opacity: 0 },
};
