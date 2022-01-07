module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="world">🗺️</span>`;
    } else if (randomNum > 0.5) {
      return `<span for="img" aria-label="luggage">🧳</span>`;
    } else if (randomNum > 0.3) {
      return `<span for="img" aria-label="bus">🚌</span>`;
    } else if (randomNum > 0.1) {
      return `<span for="img" aria-label="passport">🛂</span>`;
    }else {
      return `<span for="img" aria-label="plane">✈️</span>`;
    }
  },
  get_reviews: () => {
    const numrandom = Math.random();

    if (numrandom > 0.7) {
      return `<p>"This looks like a nice spot." -Thomas</p>`
    } else if (numrandom > 0.5) {
      return `<p>"10/10 spot for a vacation." -Dane</p>`
    } else if (numrandom > 0.3) {
      return `<p>"My family loved the views here!" -Andrew</p>`
    } else if (numrandom > 0.1) {
      return `<p>"Tried so many new foods here!" -Gabe</p>`
    } else {
      return `<p>"Had an amazing time forsure would come back!" -Luis</p>`
    } 
  }
};
