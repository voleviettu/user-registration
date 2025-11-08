import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import HomestayCard from "@/components/HomestayCard";
import ReviewCard from "@/components/ReviewCard";
import heroBackground from "@/assets/image/background/hero-background.jpg";
import featureBackground from "@/assets/image/background/feature-background.jpg";
import reviewBackground from "@/assets/image/background/review-background.jpg";
import homestay1 from "@/assets/image/mock/homestay-1.jpg";
import homestay2 from "@/assets/image/mock/homestay-2.jpg";
import homestay3 from "@/assets/image/mock/homestay-3.jpg";

const Index = () => {
  const homestays = [
    {
      id: "1",
      image: homestay1,
      title: "Cozy Mountain Retreat",
      location: "Rocky Mountains, Colorado",
      rating: 4.9,
      reviews: 127,
      price: 149,
    },
    {
      id: "2",
      image: homestay2,
      title: "Sunset Valley Home",
      location: "Napa Valley, California",
      rating: 4.8,
      reviews: 94,
      price: 189,
    },
    {
      id: "3",
      image: homestay3,
      title: "Rustic Countryside Stay",
      location: "Vermont Highlands",
      rating: 5.0,
      reviews: 156,
      price: 129,
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      initials: "SJ",
      rating: 5,
      review: "Absolutely stunning location! The homestay exceeded all expectations. The hosts were incredibly welcoming and the views were breathtaking. Can't wait to return!",
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      initials: "MC",
      rating: 5,
      review: "Perfect getaway for our family. The place was spotless, well-equipped, and the peaceful surroundings made it a truly memorable experience. Highly recommend!",
      date: "1 month ago",
    },
    {
      name: "Emma Williams",
      initials: "EW",
      rating: 4,
      review: "Beautiful property with amazing amenities. The only minor issue was the Wi-Fi connection, but honestly, it was nice to disconnect. Would definitely book again!",
      date: "3 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Find Your Perfect Escape
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Discover unique homestays in stunning locations around the world
          </p>
          <div className="flex justify-center pt-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Homestays Section */}
      <section 
        id="homestays" 
        className="py-40 md:py-80 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${featureBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Homestays</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Handpicked accommodations that offer comfort, beauty, and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homestays.map((homestay, index) => (
              <div
                key={homestay.id}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <HomestayCard {...homestay} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section 
        id="reviews" 
        className="py-40 md:py-80 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${reviewBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Guest Reviews</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              See what our guests have to say about their stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="rounded-none py-12 px-4" style={{ backgroundColor: 'hsl(var(--dark-footer))' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">About StayHub</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover and book unique homestays around the world. We connect travelers with authentic local experiences.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span>hello@StayHub.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 text-white rounded-full p-3 hover:scale-110 hover:bg-gray-700 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 text-white rounded-full p-3 hover:scale-110 hover:bg-gray-700 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 text-white rounded-full p-3 hover:scale-110 hover:bg-gray-700 transition-transform"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} StayHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
