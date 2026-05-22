export function generateStars(reviewText: string) {
  const ratingMatch = reviewText.match(/(\d+\.?\d*)/);
  if (!ratingMatch) return { stars: 0, rating: 0 };

  const rating = parseFloat(ratingMatch[1]);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return {
    stars: fullStars + (hasHalfStar ? 1 : 0),
    rating,
  };
}
