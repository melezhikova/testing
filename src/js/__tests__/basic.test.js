import validator from '../validator';
import paymentSystem from '../paymentSystem';

test.each([
  ['5132387276641181', true],
  ['5132387276641185', false],
])(
  ('check validator'), (value, expected) => {
    expect(validator(value)).toBe(expected);
  },
);

test.each([
  ['22', 'mir'],
  ['40', 'VISA'],
  ['33', 'american_express'],
  ['52', 'mastercard'],
])(
  ('check paymentSystem'), (value, expected) => {
    expect(paymentSystem(value)).toBe(expected);
  },
);
