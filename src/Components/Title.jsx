import { useEffect } from 'react';

function Title({ title }) {
  useEffect(() => {
    document.title =`${title} | AasPaas | Buy n Sell | IIT BHU Varanasi`;
  }, [title]);

  return null;
}

export default Title;
