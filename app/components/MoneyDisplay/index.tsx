import numeral from 'numeral';

type TMoneyDisplayProps = {
  amount: number;
  currency: string;
};

export const MoneyDisplay = ({ amount, currency }: TMoneyDisplayProps) => {
  const formattedAmount = numeral(amount).format('0,0');

  return (
    <div>
      {formattedAmount} {currency}
    </div>
  );
};
