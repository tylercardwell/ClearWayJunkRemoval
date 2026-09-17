"use client";

type Review = {
  name: string;
  place: string;
  quote: string;
  profile: string;
};

const reviews: Review[] = [
  { name: "Melissa R.", place: "Lincoln Square", quote: "Fast, professional, and so easy. Our garage finally feels like a garage again!", profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80" },
  { name: "David K.", place: "Oak Park", quote: "The team was friendly, careful, and got everything out quickly. Highly recommend Clearway!", profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80" },
  { name: "Priya S.", place: "Hyde Park", quote: "It feels great knowing our old furniture was donated. Clearway made the whole process simple.", profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80" },
  { name: "Marisol R.", place: "Ravenswood", quote: "The crew was warm, quick, and careful with our home. They made a hard job feel easy.", profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80" },
  { name: "Marcus T.", place: "Evanston", quote: "A clear price, a friendly crew, and no lingering mess. Exactly what we needed.", profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=96&q=80" },
  { name: "Elaine P.", place: "Wilmette", quote: "They set aside usable pieces for donation, which meant a lot to our family.", profile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=96&q=80" },
];

function ReviewCard({ review }: { review: Review }) {
  return <article className="cw-marquee-card">
    <div className="cw-marquee-person"><img src={review.profile} alt="" width="38" height="38" /><div><strong>{review.name}</strong><span>{review.place}</span></div></div>
    <div aria-label="Five star review" className="cw-marquee-stars">★★★★★</div>
    <p>“{review.quote}”</p>
  </article>;
}

export default function ReviewsMarquee() {
  const firstRow = reviews.slice(0, 3);
  const secondRow = reviews.slice(3);
  return <div className="cw-marquee" aria-label="Customer reviews">
    <div className="cw-marquee-row">{[...firstRow, ...firstRow].map((review, index) => <ReviewCard key={`first-${review.name}-${index}`} review={review} />)}</div>
    <div className="cw-marquee-row cw-marquee-row-reverse">{[...secondRow, ...secondRow].map((review, index) => <ReviewCard key={`second-${review.name}-${index}`} review={review} />)}</div>
  </div>;
}
