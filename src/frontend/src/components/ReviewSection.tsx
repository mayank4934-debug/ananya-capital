import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, ThumbsUp, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useGetReviews, useSubmitReview } from "../hooks/useQueries";

function StarRating({
  rating,
  interactive = false,
  onRate,
  size = 4,
}: {
  rating: number;
  interactive?: boolean;
  onRate?: (r: number) => void;
  size?: number;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = interactive ? i < (hover || rating) : i < rating;
        return (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onMouseEnter={() => interactive && setHover(i + 1)}
            onMouseLeave={() => interactive && setHover(0)}
            onClick={() => interactive && onRate?.(i + 1)}
            className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
            aria-label={`${i + 1} stars`}
          >
            <Star
              className={`w-${size} h-${size} ${filled ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function ReviewSection() {
  const { data: reviews = [], isLoading } = useGetReviews();
  const { mutate: submitReview, isPending } = useSubmitReview();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", rating: 0, comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) {
      toast.error("Please select a star rating");
      return;
    }
    submitReview(
      { username: form.name, rating: form.rating, text: form.comment },
      {
        onSuccess: () => {
          toast.success("Review submitted successfully!");
          setForm({ name: "", rating: 0, comment: "" });
          setShowForm(false);
        },
        onError: () =>
          toast.error("Failed to submit review. Please try again."),
      },
    );
  };

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  const ratingCounts = [5, 4, 3, 2, 1].map(
    (star) => reviews.filter((r) => r.rating === star).length,
  );
  const maxCount = Math.max(...ratingCounts, 1);

  return (
    <section className="py-16 bg-muted/40" data-ocid="reviews.section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real reviews from real customers who trusted Ananya Capitals with
            their financial needs.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <Card className="p-6 border border-border bg-card text-center">
            <p className="text-5xl font-bold text-foreground font-display">
              {averageRating}
            </p>
            <div className="flex justify-center my-2">
              <StarRating rating={Math.round(Number(averageRating))} size={5} />
            </div>
            <p className="text-sm text-muted-foreground">
              {reviews.length} reviews
            </p>
          </Card>

          <Card className="p-6 border border-border bg-card md:col-span-2">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star, i) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-8">
                    {star}★
                  </span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all"
                      style={{
                        width: `${(ratingCounts[i] / maxCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8 text-right">
                    {ratingCounts[i]}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Review List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card
                key={i}
                className="p-6 border border-border bg-card animate-pulse"
              >
                <div className="h-4 bg-muted rounded w-1/3 mb-3" />
                <div className="h-3 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-2/3" />
              </Card>
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <div
            className="text-center py-12 bg-card border border-border rounded-xl"
            data-ocid="reviews.empty_state"
          >
            <ThumbsUp className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">
              No reviews yet. Be the first to share your experience!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <Card
                key={review.id ?? i}
                className="p-6 border border-border bg-card hover:shadow-md transition-shadow"
                data-ocid={`reviews.item.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {review.username}
                    </p>
                    <StarRating rating={review.rating} size={3} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  {new Date(review.timestamp).toLocaleDateString("en-IN")}
                </p>
              </Card>
            ))}
          </div>
        )}

        {/* Write Review Button */}
        <div className="text-center mt-10">
          {!showForm ? (
            <Button
              onClick={() => setShowForm(true)}
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
              data-ocid="reviews.open_form_button"
            >
              Write a Review
            </Button>
          ) : (
            <Card className="max-w-lg mx-auto p-6 border border-border bg-card text-left">
              <h3 className="text-lg font-semibold text-foreground font-display mb-4">
                Write Your Review
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="review-name">Your Name</Label>
                  <Input
                    id="review-name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    placeholder="John Doe"
                    className="mt-1"
                    data-ocid="reviews.name_input"
                  />
                </div>
                <div>
                  <Label>Rating</Label>
                  <div className="mt-1">
                    <StarRating
                      rating={form.rating}
                      interactive
                      onRate={(r) => setForm((p) => ({ ...p, rating: r }))}
                      size={6}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="review-comment">Your Experience</Label>
                  <Textarea
                    id="review-comment"
                    value={form.comment}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, comment: e.target.value }))
                    }
                    required
                    placeholder="Share your experience with Ananya Capitals..."
                    rows={4}
                    className="mt-1"
                    data-ocid="reviews.comment_textarea"
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    type="submit"
                    className="bg-primary text-primary-foreground font-semibold"
                    disabled={isPending}
                    data-ocid="reviews.submit_button"
                  >
                    {isPending ? "Submitting..." : "Submit Review"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    data-ocid="reviews.cancel_button"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
