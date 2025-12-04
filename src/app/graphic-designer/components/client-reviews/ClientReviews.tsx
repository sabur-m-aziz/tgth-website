import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const ClientReviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma J.",
      role: "Financial Analyst",
      rating: 5,
      review:
        "Working with TGTH has been a game-changer for our business. Their offshore team seamlessly integrates with ours, allowing us to focus on growth while they handle the nitty-gritty of customer service and administration. Highly recommend their services!",
      avatar: "./images/template/client1.svg",
    },
    {
      id: 2,
      name: "Liam R.",
      role: "Marketing Specialist",
      rating: 5,
      review:
        "I was initially hesitant about offshoring, but TGTH made the transition so smooth. Their professional team understands our needs and has helped us cut costs significantly without compromising quality. I couldn’t be happier with the results!",
      avatar: "./images/template/client2.svg",
    },
    {
      id: 3,
      name: "Sophie M",
      role: "Sales Manager",
      rating: 5,
      review:
        "TGTH's expertise in recruitment is unmatched. They found us a fantastic marketing specialist who has brought fresh ideas and energy to our campaigns. It's like having an in-house team without the overhead costs. Thank you, TGTH!",
      avatar: "./images/template/client3.svg",
    },
    {
      id: 4,
      name: "Michael T.",
      role: "Financial Analyst",
      rating: 5,
      review:
        "The level of support we get from TGTH is incredible. From the initial onboarding to ongoing communication, they ensure everything runs smoothly. Their commitment to understanding our business is what sets them apart. I highly recommend them!",
      avatar: "./images/template/client4.svg",
    },
    {
      id: 5,
      name: "Chloe B.",
      role: "Sales Specialist",
      rating: 5,
      review:
        "Our experience with TGTH has been outstanding. They are not just a service provider; they feel like a partner in our journey. Their team has been instrumental in streamlining our operations, and we’ve seen remarkable improvements in efficiency.",
      avatar: "./images/template/client5.svg",
    },
    {
      id: 6,
      name: "Oliver K.",
      role: "Investment Planner",
      rating: 5,
      review:
        "I can’t say enough good things about TGTH! Their talent acquisition specialists took the time to understand our requirements and delivered top-notch candidates for our finance department. It’s been a pleasure working with them, and I look forward to continued success together!",
      avatar: "./images/template/client6.svg",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-text-secondary mb-10">
            What Our Clients Say About Us
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="mt-auto">
                <StarRating rating={testimonial.rating} />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
