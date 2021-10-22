export default function paymentSystem(value) {
  const firstFigure = parseInt(value.charAt(0), 10);
  const secondFigure = parseInt(value.charAt(1), 10);
  switch (firstFigure) {
    case 2: return 'mir';
    case 3: switch (secondFigure) {
      case 0: return 'diners_club';
      case 1: return 'jcb';
      case 3: return 'american_express';
      case 5: return 'jcb';
      case 6: return 'diners_club';
      case 7: return 'american_express';
      case 8: return 'diners_club';
      default: return false;
    }
    case 4: return 'VISA';
    case 5: switch (secondFigure) {
      case 0: return 'maestro';
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: return 'mastercard';
      case 6:
      case 7:
      case 8: return 'maestro';
      default: return false;
    }
    case 6: switch (secondFigure) {
      case 0: return 'discover';
      case 2: return 'unionpay';
      case 3:
      case 7: return 'maestro';
      default: return false;
    }
    default: return false;
  }
}
