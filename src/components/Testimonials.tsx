import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

const testimonials = [
  {
    title: "First Home Secured, Stress-Free",
    name: "Shruthilaya Jaganathan",
    location: "Toronto",
    text: "Working with Nalin to buy my first home couldn’t have been a better experience. I found is approach to be personal and intentional. He put in a ton of effort upfront to really understand what I wanted and how it worked with my lifestyle, and this allowed both of us to evaluate every viewing with a lot of confidence and clarity. He met me where I was, he was always patient and never made me feel rushed. Nalin is one of those realtors who bring to the table *exactly* what is needed. Feeling anxious? He brings calm, reassurance and patience. Feel like you have rose-tinted glasses about every place you see? He brings a realistic, pragmatic attitude. This built a lot of trust, because I knew he was looking out for me through the entire process, and that trust made this whole process a truly enjoyable one.",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service"]
  },
  {
    title: "New Home, No Anxiety",
    name: "Krisha Malik",
    location: "Toronto",
    text: "Nalin was fantastic to work with when looking for our new home. He was honest, direct, responsive, and provided really detailed and clear information on the entire process after we had our offer accepted on our new home. It really felt like his goal was to make sure we bought a home we loved and would be happy in, and he took the anxiety out of home buying. We would absolutely work with him again, and have already recommended him to friends.",
    rating: 5,
    categories: ["First-Time Buyers", "Responsive Service"]
  },
  {
    title: "Data-Driven Guidance, Stress-Free",
    name: "Harry Gill",
    location: "Toronto",
    text: "Nalin is the agent you want in your corner—sharp, grounded, and laser-focused on what actually matters. He doesn’t just toss opinions around; he backs everything with solid market data, gives clear, rational advice, and keeps you looped in without the fluff. The whole process felt seamless, smart, and oddly stress-free.",
    rating: 5,
    categories: ["Data-Driven", "Market Knowledge"]
  },
  {
    title: "Years Searching, Home Secured",
    name: "Maxine Bell",
    location: "Toronto",
    text: "We bought a house! These are words that still feel surreal to say, but thanks to Nalin we can share in the excitement that it's in fact true!  We connected with Nalin years ago to start the process of purchasing our first home. Things seemed so out of reach for a while that we took a back seat, checking the listings he sent us, but nothing ever felt right.  It wasn't until this spring that Nalin noticed we were liking quite a bit of listings and we hit the ground running. Our nervousness and indecisiveness was balanced by Nalin's calm and professional attitude. Booking viewings, second guessing, canceling, booking more while on route to another, he was ON IT! He helped us hone in on exactly where in the city we wanted to live (our search area was very broad for too long). By doing so, we were able to check off many more things on our wish list compared to other areas we had considered.  In the end we secured our first home! Nalin knew what it would take to be successful in our mission and ensured we were comfortable financially and emotionally ever step of the way. We can't thank Nalin enough for the care and dedication we felt while working with him. He was and still is very quick to reply and answer all our logistical questions about purchasing a home and home ownership in general. He also has given great advice and resources related to renovations we need done.  A million thanks!",
    rating: 5,
    categories: ["First-Time Buyers", "Long-Term Support", "Patient Service"]
  },
  {
    title: "Perfect Space Found, Above & Beyond",
    name: "Shape Fitness",
    location: "Toronto",
    text: "He went above and beyond to help our family find the perfect space for us - his experience, knowledge and drive makes him the perfect combination.",
    rating: 5,
    categories: []
  },
  {
    title: "Patient Guidance, Trusted Agent",
    name: "Massimo Orsini",
    location: "Toronto",
    text: "Nalin is the best agent/person you'll ever work with.  I have had the pleasure (and sometimes, the misadventure) of working with several real estate agents in the past, as my studies and work have led me to live in various places. In full candor and transparency, Nalin is, by far, not just the most diligent agent I have ever had the pleasure to work with, but one of the most professional service providers I have worked with to date.  Nalin was incredibly communicative and transparent every step of the way. I was never made to feel rushed, home visits were a breeze to coordinate, and Nalin's experience and keen eye made every visit an educational one as we narrowed down options for what would become a home.  And I can't emphasize this enough: where most agents are solely motivated to close a deal and move onto the next transaction, at no time did I doubt that Nalin had my best interests at heart. He was patient, accommodating, and proactive in raising red flags that I would not have otherwise considered.  For anyone looking for a trustworthy, reliable agent, I unequivocally recommend working with Nalin.  *I was not asked to leave a review - this is real, genuine feedback.",
    rating: 5,
    categories: ["Professional Service", "Market Knowledge"]
  },
  {
    title: "Calm Support, Beyond Closing",
    name: "Elijah Di Gangi",
    location: "Toronto",
    text: "Over And Above  Nalin is the polar opposite of the stereotypical real estate agent: he’s caring and considerate, responsive, collaborative, and is motivated by human connections, not commissions.  My wife and I worked with Nalin on and off over the summer and fall to find our first home. We were clueless and his market knowledge and calming vibe helped make a stressful situation more manageable. He let us dictate the speed of the search process, supporting us as needed and taking breaks or pulling back when we were forced to due to work schedules. The 3 of us had great communication throughout, exchanging listings and notes, plans of attack, etc.  Once we landed a place in the fall, he didn’t disappear. He continued to follow up and help out, going above the call of duty to make sure we were comfortable and satisfied in our first home. His rolodex of contacts, from home inspection to contractors, was super helpful as well, and we had great experiences with everyone he referred us to.  Real Estate in T.O. can be hectic, but the ride is a hell of a lot smoother with the calming presence that is Nalin Sharma riding shotgun with you.",
    rating: 5,
    categories: ["First-Time Buyers", "Long-Term Support", "Patient Service"]
  },
  {
    title: "Kind Expertise, Stress-Free",
    name: "Jennifer Pagliaro",
    location: "Toronto",
    text: "Nalin is as kind as he is experienced. He helped us buy our first home with so little stress we wondered why it wasn't harder. His analysis of market trends and approach to bidding put us at ease and we can't recommend him enough to anyone looking for a five-star experience.",
    rating: 5,
    categories: ["First-Time Buyers", "Expert Guidance", "Market Knowledge"]
  },
  {
    title: "Hidden Gem Found, Anxiety Gone",
    name: "Isabel Matwawana",
    location: "Toronto",
    text: "I cannot recommend Nalin highly enough! As a super anxious first time homebuyer, Nalin took the time to answer every question thoroughly and honestly and gave me exactly as much handholding as I needed. He also got to know me and my needs so that he could give me little nudges when I needed them so that I didn't miss out on opportunities. He ultimately recommended looking at a spot that wasn't initially on my radar, and it ended up being the one. I LOVE my new home and I don't think I would have found it without him. I'm so grateful for his guidance and friendship at every step of this process. You can't go wrong with Nalin as your realtor.",
    rating: 5,
    categories: ["First-Time Buyers", "Expert Guidance", "Patient Service"]
  },
  {
    title: "Methodical Search, Genuine Care",
    name: "Gregor Simeonov",
    location: "Toronto",
    text: "Even as a long time friend, Nalin was the upmost professional in our search for a new home. Patient, caring, genuine, always had our best interests in mind. Thank you for all the effort and hard work! From the beginning he helped us with a guided and methodical approach to make the searching process as efficient as possible. Once we narrowed in on our desired regions and budget, we worked collaboratively to find the best fit. Nalin is very passionate and dedicated, always available to chat, screen homes, chase information, through all hours of the day.  Thank you again for everything and we'll definitely be in touch in the future!",
    rating: 5,
    categories: ["Patient Service", "Long-Term Support", "Professional Service"]
  },
  {
    title: "Quick, Smooth Home Purchase",
    name: "Sinjin Dees",
    location: "Toronto",
    text: "It was a pleasure to work with Nilesh. He was attentive, knowledgeable and understood our needs in getting us into a great home quickly and smoothly. We wouldn't hesitate to recommend.",
    rating: 5,
    categories: []
  },
  {
    title: "Compassionate Guidance, Above & Beyond",
    name: "Michael T",
    location: "Toronto",
    text: "I can't recommend Nalin more highly to work with. Throughout the selling and buying process, he is kind, empathetic, patient, responsive, and diligent. He listens to our needs, walks us through options, provides us with informative analysis, and gives us the space to make decisions that we're comfortable and happy with. When we had a family emergency, he went above and beyond to help sell my condo. Nalin is an all-round good human and I would not hesitate to work with him again.",
    rating: 5,
    categories: ["Buying & Selling", "Long-Term Support", "Professional Service"]
  },
  {
    title: "Within Budget, Dream Home",
    name: "Chi Nguyen",
    location: "Toronto",
    text: "As a first time home buyer, I was nervous and scared about this daunting process. Nalin came referred by two different friends, so I was hopeful that it would be a good fit. Nalin surpassed every single hope and expectation: he's kind, patient, genuine, and honest. He provided the perfect balance of guidance and education, coupled with care and consideration. He asked us questions about our goals that we hadn't considered, offered opinion and options without being overwhelming, and he never ever made us feel like we were not making decisions with full transparency. Nalin shared his expertise with us, was so responsive, and always invited more questions and critical thinking.  It has been wonderful working with him - as a first generation immigrant, being able to own a home in one of the most competitive housing markets, while remaining within our budget, is truly a dream that I never thought possible.  Thank you for everything, Nalin.",
    rating: 5,
    categories: ["Budget-Friendly", "First-Time Buyers", "Competitive Market"]
  },
  {
    title: "Family Home Secured, Stress Lifted",
    name: "Kim Ibarra",
    location: "Toronto",
    text: "We worked with Nalin to find a house for our growing family. Entering the Toronto Real Estate market was stressful and overwhelming, but Nalin was there every step of the way to help us find the perfect home. He took the time to really understand our needs and preferences, and to help us understand the bidding and buying process. He was super responsive and extremely quick to answer all of our many questions. For every house we were interested in, Nalin went above and beyond to get us helpful intel to inform our decision-making process. Highly recommend him to anyone looking for an agent.",
    rating: 5,
    categories: ["Patient Service", "Family Homes", "Market Knowledge"]
  },
  {
    title: "Above & Beyond, Perfect Match",
    name: "Radan Rusev",
    location: "Toronto",
    text: "I've worked with Nalin for years and I recommend him to anyone in the strongest terms possible. In my experience, he has always gone above and beyond for his clients. He doesn't push clients to settle and always helps them find a place they'll love and be happy living in for years. You can never go wrong if you choose him as your real estate agent.",
    rating: 5,
    categories: ["Long-Term Support", "Professional Service"]
  },
  {
    title: "Smooth First Purchase, Trusted Team",
    name: "Min Lee",
    location: "Toronto",
    text: "It was a pleasure to work with Nalin for my first home purchase in Toronto. He was very considerate in his interactions and scrupulously professional in his work. In addition, his network of various professionals were there to support each step of the process and ensured everything proceeded very smoothly.",
    rating: 5,
    categories: ["First-Time Buyers", "Professional Service"]
  },
  {
    title: "Two Sales, Smart Purchase",
    name: "June Tran",
    location: "Toronto",
    text: "Nalin helped us with two sales and a purchase, and he was a pleasure to work with. He followed up with all visitors to our properties, and made them feel taken care of. He asked the right questions, and we did not overbid for our purchase. He didn't apply any pressure, and in some cases would ask questions that reigned us in from an over hasty bid. We're done with other agents now.",
    rating: 5,
    categories: []
  },
  {
    title: "No Pressure, Perfect Fit",
    name: "Jo Lee",
    location: "Toronto",
    text: "Working with Nalin was such a great experience. His expertise is evident by his professionalism and authenticity. He never led us astray and was very patient with us as we re-adjusted our expectations according to the market. We never felt pressure to purchase and he was always looking for potential listings that could be a good fit for us.  We found the viewings and information provided by Nalin extremely thorough. Having worked with other realtors I can confidently say Nalin goes above and beyond to ensure you find the right place. He is not looking to make another sale, but find you the perfect home whatever your time line or budget is. I couldn't recommend anyone better.",
    rating: 5,
    categories: ["Patient Service", "Long-Term Support", "Professional Service"]
  },
  {
    title: "Graceful Support in Tough Market",
    name: "Alex Perelgut (NegZer0)",
    location: "Toronto",
    text: "I can’t speak highly enough about Nalin (and Sayva real estate’s entire ethos). We worked with him to find our first condo rental 4 years ago and couldn’t wait to work with him again to find our new lease. It’s a tough market out there but his grace under pressure, humour and insight are what kept us from losing hope throughout our search for the perfect place. We can’t wait to use him when we purchase a home in a few years and can’t recommend him enough.",
    rating: 5,
    categories: []
  },
  {
    title: "Seamless Search, Trusted Advice",
    name: "Julie",
    location: "Toronto",
    text: "I have nothing but positive things to say about working with Nalin. He listened to our needs and took the time to help us navigate the real estate market in such a seamless way. In a sometimes stressful process, Nalin was professional, honest, and also made the experience enjoyable. He has an eye for detail and will point out important items to consider that you may have missed in the process. Bottom line: If you're looking for a knowledgeable, honest, and professional realtor who considers all of the important and necessary elements and details, but most importantly, has your best interests in mind, I highly recommend Nalin.",
    rating: 5,
    categories: []
  },
  {
    title: "Unbiased Guidance, Smart Choices",
    name: "Adam Secord",
    location: "Toronto",
    text: "Nalin was recommended to me by a friend and I have since recommended him to a few friends of mine. He helped me evaluate rent vs buy options with an unbiased opinion and was not at all pushy which I really appreciated. He was very responsive and used his experience and expertise to point out pros/cons of the units we saw that I definitely would have missed. Would highly recommend and will seek out Nalin again on my next real estate transaction.",
    rating: 5,
    categories: []
  },
  {
    title: "Extra-Mile Rental Search",
    name: "Vinícius Stock",
    location: "Toronto",
    text: "Our experience of renting with Nalin was fantastic. He was committed to finding a place we would like and really went the extra mile to help us find it.  He's an experienced realtor and provides honest opinions on properties to make sure the client is getting the best possible deal.  Trustworthy and super friendly, we cannot recommend Nalin enough.",
    rating: 5,
    categories: []
  },
  {
    title: "Two-Year Journey, Perfect Home",
    name: "Jeffrey Garriock",
    location: "Toronto",
    text: "Nalin worked with me on and off over a period of two years as I thought I wanted to buy, realized it wasn't the right time, came back to the idea after several months (where he picked up right where we left off) and when I was looking elsewhere, happily recommended me someone for that region. We ended up back with Nalin who helped us find the home we're in! He was always super responsive and very straightforward, unafraid to share his genuine opinion. In a complicated market (especially for a first time buyer like myself) he helped disambiguate some of the more opaque aspects of buying a property, while also helping me to keep my expectations realistic. We ended up in a place we love for a price we can afford in a neighbourhood we liked. Would recommend Nalin to anyone!",
    rating: 5,
    categories: []
  },
  {
    title: "Honest Insight, Found Future Home",
    name: "Shel Scott",
    location: "Toronto",
    text: "Nalin is amazing! I really appreciated his honest opinion on the properties we were seeing. He always pointed out important things that as a new prospective homeowner I had no idea about (but were super important). He kept us well informed at every turn and was so friendly and professional. He wasn't about \"making a sale\" - he really wanted us to find our future home. And we did! Can't wait to have him over for a celebratory beverage!",
    rating: 5,
    categories: []
  },
  {
    title: "Pandemic Rental Success",
    name: "Anisha Malik",
    location: "Toronto",
    text: "Nalin helped me find a new rental space during the pandemic. It was a great experience. Not only was he extremely knowledgeable, but he made the process very comfortable, working with me to find the space that best suited my needs. I ended up a finding a place that I absolutely love, in what felt like no time at all! I would highly recommend Nalin.",
    rating: 5,
    categories: []
  },
  {
    title: "Fast & Professional Rental",
    name: "Ryan Chalmers",
    location: "Toronto",
    text: "Nalin worked with my to find a new rental unit in Toronto. Great experience, very professional, fast response time, pleasure to deal with. Definitely would recommended contacted Nalin if you're looking to rent/buy in the city.",
    rating: 5,
    categories: []
  },
  {
    title: "Responsive, Market-Savvy Rental",
    name: "Diane Wu",
    location: "Toronto",
    text: "Nalin is an incredible realtor. We were looking for a place to rent and Nalin was the perfect guide through the process. Nalin knows a lot about the Toronto market and was very helpful in finding us a place that matched our criteria. He is very responsive to e-mail/texts and is always willing to jump on a phone call. Most importantly Nalin is extremely friendly and professional. I would recommend him to anyone looking for a realtor in Toronto!",
    rating: 5,
    categories: []
  },
  {
    title: "Professional & Thoughtful, No Pressure",
    name: "Mike Pezzi",
    location: "Toronto",
    text: "Nalin is an incredible agent! If you’re fortunate enough work with him you’ll be impressed by his professionalism and thoughtfulness during the buying or selling process. His insights into the market, and his non-pressured approach make him a pleasure to work with. I could not have asked for a better agent than Nalin. I will definitely be working with him in the future, and would highly recommend his services to anyone!",
    rating: 5,
    categories: []
  },
  {
    title: "Above & Beyond, Seamless Rent",
    name: "mike arnott",
    location: "Toronto",
    text: "My partner and I had an excellent experience working with Nalin this past month. He was an incredible guide through the whole renting process — great communication, helpful, thoughtful, thorough, professional and always willing to hop on the phone to answer our (many) questions!  Nalin definitely went over and beyond in all of our interactions to make our experience a seamless one. We couldn't be happier with the result. Highly recommended!",
    rating: 5,
    categories: []
  },
  {
    title: "Dedicated Search, Good Cheer",
    name: "Eric Hill",
    location: "Toronto",
    text: "Nalin was great to work with.  He is extremely dedicated to his customers and profession,  going out of his way to help.  His knowledge of the area was vast making the entire process manageable.  We had very specific criteria and Nalin was able to sort out the options quickly and set appointments in a expedient manner.  Beyond the professional side Nalin has a great personality and his general good nature made the entire process enjoyable.  I highly recommend him!",
    rating: 5,
    categories: []
  },
  {
    title: "High-Quality Tenants, Quick Results",
    name: "Peter Csenar",
    location: "Toronto",
    text: "Extremely professional individual - Nalin has helped me find tenants for the multiple buildings I manage. He has secured me high quality tenants, quickly,  paying asking or above rents. Would highly recommend his services if you are looking for a new tenant or selling your home.",
    rating: 5,
    categories: []
  },
  {
    title: "From Stress to Perfect Place",
    name: "Krista Llewellyn",
    location: "Toronto",
    text: "A few months ago, my boyfriend and I decided to get a place together. Distracted by the excitement for us finding our perfect place, we forgot about how stressful the process can actually be! Every time we checked out a place, there was already an offer, or it was out of our price point. That's when Nalin swooped in like a gift from the GODS! Referred to us by a friend, Nalin quickly made it known that he was here to help as our Agent, but most importantly, as our friend. He sent us our options, and based on what we said we were interested in, he gave us his honest opinion on buildings and areas based on his experience, even if it wasn't what we wanted to hear. He worked around our crazy schedules and met up with us or called us whenever we needed, and even when we felt like we might never find a place... we took comfort in knowing that Nalin had our backs, and our best interests in mind. When the right place finally presented itself and we had to act quickly, Nalin talked us through everything to look for and take note of, and made us feel completely comfortable in signing the paperwork. We never felt pressured, and instead were made to feel at ease throughout a process that has had both of us pulling our hair out in the past. Thank you Nalin for everything you've done for us as an agent, but most importantly, as a friend. We LOVE our new place, and we couldn't be more grateful for your help finding it. :) Cheers! Krista & Dave",
    rating: 5,
    categories: []
  },
  {
    title: "First Choice Neighbourhood Won",
    name: "Stephanie Claydon",
    location: "Toronto",
    text: "We had such a great experience working with Nalin. Without him, we would have given up on buying in our first choice neighbourhood a long time ago but with his encouragement we persisted and bought exactly where we wanted to be. Nalin is patient, dedicated and makes the home buying process a positive experience, no matter how long it takes.  We've never hesitated to recommend him to others and will continue to do so in the future.  You can't go wrong working with Nalin!",
    rating: 5,
    categories: []
  },
  {
    title: "New City, Dream Home in a Month",
    name: "Thiago Tolentino Silva",
    location: "Toronto",
    text: "We had just arrived in Toronto from Brazil and needed to find an apartment in one month. Nalin was so nice and welcoming, he even got us tips about the city itself! He was great booking us the visits and, most importantly, giving us honest opinion on what he thought about the place. We visited a lot of units until we found exactly what we wanted! We are so happy about it. We strongly reccommend him!",
    rating: 5,
    categories: ["Patient Service", "Rental Services", "Fast Closing"]
  },
  {
    title: "Investor's Best Partner",
    name: "Jennifer Savage",
    location: "Toronto",
    text: "Nalin is a WONDERFUL agent!!  As a property investor, I have worked with a lot of agents before.  Nalin is head-and-shoulders above the rest!  I was endlessly impressed by his level of professionalism, his commitment, his diligence, and his attention to detail.  He is also funny and a positive person.  You could not ask for a better agent to serve you.",
    rating: 5,
    categories: ["Investment Properties", "Professional Service"]
  },
  {
    title: "Dream Neighbourhood Achieved",
    name: "Tori O'Dwyer",
    location: "Toronto",
    text: "We were extremely pleased with the exceptional service Nalin provided.  As first time home buyers we were nervous and clueless, but he was able to guide us through the process and answer all of our questions. We were ultimately able to buy in a neighborhood we thought would be beyond our reach. He worked with our schedules and made sure we never missed an opportunity to see a house we were interested in. Nalin truly went above and beyond, even meeting with a potential contractor when we were unavailable and needed an estimate on an urgent basis. We can't recommend him highly enough.",
    rating: 5,
    categories: []
  },
  {
    title: "Rental Issues Solved, Perfect Fit",
    name: "Tamra Laird",
    location: "Toronto",
    text: "We had such a great experience with Nalin from beginning to end. He listened to what we were looking for and helped us find a rental within our budget, location, and that met all of our needs. He went above and beyond to solve some issues we came across that our landlord wasn’t dealing with, and he was always proactive and efficient in every way. We really cannot say enough great things about Nalin. He was recommended to us by 2 different friends and it’s so clear after working with him why he comes so highly recommended- he’s just the best!",
    rating: 5,
    categories: []
  },
  {
    title: "30-Day Miracle Move",
    name: "Jermaine Bain",
    location: "Toronto",
    text: "Last year, my wife and I found ourselves in a bit of a time crunch to find a new place. She was pregnant and needed to get settled in, I was working 65+ hours per week and in my free time was studying textbooks trying to achieve a new accreditation. Needless to say, there was a lot of stress and both of us knew that considering my wife's pregnancy, it was not good. So we contacted Nalin who began his search. He immediately brought a sense of calm to our lives with his focus, rigour and resolve. We knew that with his experience, he would be able to create a game plan to ensure our success and that is exactly what happened. Nalin saved us time by clarifying elements we had not thought about.  After a handful of showings, he crafted a master offer which was accepted and closed all within 30 days! Beautiful (and necessary) as our baby came one month early - born only two weeks after we moved into our new place! None if us could have predicted that. Without Nalin in our lives at that time we would have undoubtedly faced some challenges that we would have preferred to avoid. Thank you Nalin for your hard work. We will always recommend you.",
    rating: 5,
    categories: []
  },
  {
    title: "Long-Distance Lease Made Easy",
    name: "Lisa Zechmeister",
    location: "Toronto",
    text: "After an exhaustive search on my own, I had a friend refer me to Nalin and I'm certainly glad she did. Nalin helped to give me a benchmark of what to expect when renting in Toronto, what areas are great (and which to stay far away from!) and was so quick and responsive to my questions and inquiries. We facetimed at the condo I now call home which was such a lovely surprise given I was still living in BC at the time and there was no way to look at these places from afar. When I moved in and my furnace didn't work unexpectedly, Nalin came by and brought me a space heater to get me through until the repair was done. Having him there to facilitate the lease was also a huge weight off. I would highly recommend using Nalin for rental or buying needs in the GTA. Thanks, Nalin!",
    rating: 5,
    categories: []
  },
  {
    title: "Dream Space Secured, Effortless",
    name: "Kaeli Sweigard",
    location: "Toronto",
    text: "Very nice guy to work with - made the entire process easy and enjoyable. He helped us secure our dream space that we thought was out of reach, but he worked his magic. I would certainly recommend working with him!",
    rating: 5,
    categories: ["Expert Guidance", "Negotiation Skills"]
  },
  {
    title: "Right Tenants, Seamless Lease",
    name: "Nelson Medeiros",
    location: "Toronto",
    text: "Nailn does it right!  Pleasure to work with in leasing out our condo.  He's very professional, made the process seamless and took the time to find the right tenants and not just looking for the quick sale.   Thanks Nalin!",
    rating: 5,
    categories: ["Rental Services", "Professional Service"]
  },
  {
    title: "Seamless Apartment Search",
    name: "Rachel Helene Amram",
    location: "Toronto",
    text: "Nalin Sharma was such a pleasure to work with when we were looking for an apartment. He made the entire process seamless, always ready with helpful advice and a smile. Nalin is hard-working, courteous and a lovely person all around. If you are looking for a real-estate agent in Toronto, look no further. We are so grateful to him. Thank you, Nalin!",
    rating: 5,
    categories: []
  },
  {
    title: "Anxiety-Calming Guidance, New Home",
    name: "Barbara Frey",
    location: "Toronto",
    text: "If you are looking for someone who takes the time to get to know you and what you are truly seeking in your next home, contact Nalin. He was incredibly patient, helped to calm my anxieties with the crazy home-buying process and provided invaluable guidance and support in the actual decision-making. I felt like I had a friend on the journey and not an agent out to make a sale. He truly will have your best-interest at heart! It was a whirlwind of a week finding my new home, and Nalin's calm presence, unending availability and gentle humour made all the difference!",
    rating: 5,
    categories: ["First-Time Buyers", "Fast Closing", "Patient Service"]
  },
  {
    title: "Fast Find, Market Conquered",
    name: "Justin Moulton",
    location: "Toronto",
    text: "Nalin worked incredibly fast to find us a place which met all our criteria and helped us navigate through the crazy Toronto rental market. Don't think we could have done it without him!",
    rating: 5,
    categories: ["Competitive Market", "Fast Closing"]
  },
  {
    title: "Caring Guidance, Smooth Lease",
    name: "Chloe Perelgut",
    location: "Toronto",
    text: "Couldn't have asked for a more caring and thoughtful agent in the rental/leasing process. Nalin was steadfast through changes in location parameters and helped both myself and my brother have a smooth and easy transition into leasing with a private landlord. His level of communication and explanation were invaluable to creating an easy and comfortable search for the perfect place.",
    rating: 5,
    categories: ["Patient Service", "Rental Services", "Professional Service"]
  },
  {
    title: "5-Month Hunt, Perfect Place",
    name: "Ian Chang",
    location: "Toronto",
    text: "Understatement of the lifetime: Nalin is an absolutely amazing realtor.  He took the time to know and understand my values before embarking on our search for my new home. At our first meeting he put me quickly at ease, explained the process, the expectations, and warned that the journey of finding the perfect place would be filled with highs and lows.  My greatest appreciation and what differentiates Nalin from everyone else is that he will tell you when a property doesn’t feel right. “Are you sure these ceilings are high enough? – because I know you want to have a studio for photography.” “Are you sure you want to be commuting on the Gardiner Expressway during rush hour? – because that’s not healthy for road rage.” “Are you sure this balcony isn’t too close to your neighbor’s window? – because that really cuts down on your privacy.”  Nalin will point out every reason why NOT to invest in a place, because he has already taken the time to know you. When my eyes were glazed over by a property’s superficial bells and whistles, Nalin would be testing water pressures, baseboards, and material quality. While going up/down elevators, and in/out of buildings, he always stopped tenants and asked, “How do you like living here? Honestly – how do you REALLY feel about this building?”  Nalin is the voice of reason.  Over a course of 5 months, we had altogether walked in and out of a dozen properties. Sometimes we were in there for 20 minutes, and sometimes less than 2 seconds (literally). Eventually we found the perfect place. I knew something felt right, and that was confirmed when Nalin’s inch-by-inch scrutiny of the property showed the place was clean. With Nalin’s experience and knowledge of Toronto’s absolutely ridiculous real estate market, we made a bid… and won. Just by a hair, but it was enough. Originally I wanted to offer much less, but I am so thankful I took his advice.  Nalin is the Sherlock Holmes of real estate. If you care about where you will be living, then find Nalin, because he will care equally as much.",
    rating: 5,
    categories: []
  },
  {
    title: "Always There, Honest Advice",
    name: "Cathy F",
    location: "Toronto",
    text: "Working with Nalin exceeded my expectations. He would always go out of his way to show us different properties around our busy schedule. He was very honest with his opinions and feedback. Had a great experience working with him. Highly recommended! Thank you Nalin!",
    rating: 5,
    categories: []
  },
  {
    title: "Friendly Advocate, Best Interest",
    name: "Timothy Fukakusa",
    location: "Toronto",
    text: "Nalin was great to to work with and very friendly. I always felt he had our best interest in mind. I highly recommend him.",
    rating: 5,
    categories: ["Professional Service"]
  },
  {
    title: "Rapid Results, Courteous Care",
    name: "Francis San Juan",
    location: "Toronto",
    text: "My fiancée and I were looking to lease a condo and I reached out to Nalin for help. He took the time to meet with us at a café and to listen to our preferences (location, price, layout, move-in date) and was very personable. Within the next day we were receiving results for possible condos via email that matched our search criteria. In all our interactions, I've found Nalin to be very responsive and courteous in answering our questions about the paperwork and process. I would highly recommend Nalin to anyone needing help looking for a place.",
    rating: 5,
    categories: []
  },
  {
    title: "Thorough Help, Pleasant Experience",
    name: "H C",
    location: "Toronto",
    text: "Nalin is an understanding, thorough and extremely helpful agent who can make home buying experience a pleasure. Highly recommended.",
    rating: 5,
    categories: ["First-Time Buyers", "Patient Service"]
  },
  {
    title: "First-Time Buyers Education & Deal",
    name: "Lisa van der Laan",
    location: "Toronto",
    text: "Nalin is an amazing real estate agent! As first time home buyers, Nalin was always available to answer our questions and explain the process. Nalin's first time home buyers presentation was informative and really helped us to understand the entire home buying process. Nalin was available when needed and did a great job at negotiating a great deal for us! The team he has around him of Kirk Eaton, mortgage broker and Radan Rusev, lawyer were also great, super helpful and very informed. We highly recommend Nalin and his team and will use them all again in the future if needed!",
    rating: 5,
    categories: ["First-Time Buyers", "Educational", "Negotiation Skills"]
  },
  {
    title: "Patient Focus, Trusted Partner",
    name: "Neil Datt",
    location: "Toronto",
    text: "We really enjoyed our home buying experience with Nalin.  He’s responsive and resourceful and not solely focused the “sale”.   With his patient investment on really understanding our needs upfront combined with his great attitude, we trusted he had always our best interests at heart.  We would certainly recommend Nalin to friends and look forward to working with him again in the future.",
    rating: 5,
    categories: ["Patient Service", "Professional Service"]
  },
  {
    title: "Patience Pays, Perfect Condo",
    name: "Heather Cook",
    location: "Toronto",
    text: "Nalin was extremely patient while he showed my husband and I many, many condos, and helped us to define our list of requirements.  Our list turned out to be long, and I wondered if we would ever find a place.  A few weeks later, Nalin was in touch with a listing for the perfect condo which we were able to purchase.  He helped us through the process and his calm, relaxed demeanor was greatly appreciated.",
    rating: 5,
    categories: []
  },
  {
    title: "Elite Service, Expert Negotiator",
    name: "Kirk Eaton",
    location: "Toronto",
    text: "If you are looking for an elite Realtor to help you find your next home then Nalin is your guy!  Nalin is professional, highly knowledgeable and an expert negotiator while offering world-class service to his clients.  He takes care of each client like they are family and truly has their best interests at heart.  It is a pleasure working with Nalin in every aspect and I am so glad I have him in my corner.",
    rating: 5,
    categories: ["Expert Guidance", "Negotiation Skills", "Professional Service"]
  },
  {
    title: "Relocation Made Easy, Tight Deadline",
    name: "Alexandre Gariepy",
    location: "Toronto",
    text: "My wife and I moved from Montreal and did not know much about Toronto. Nalin spent a lot of time with use to help us discover the different neighborhoods as well as finding us a home in the very tight deadline we had given him. Nalin, with is great professionalism and work ethic,  made our buying experience easy and comfortable. On top of all of it, he is really  a great guy. I highly recommend him.",
    rating: 5,
    categories: []
  },
  {
    title: "Gentleman Realtor, Detailed Care",
    name: "Luciano Veta",
    location: "Toronto",
    text: "Nalin is an absolute gentleman who was wonderful to work with.  His attention to detail, care for his clients and personable nature made him a pleasure to work with.  I would recommend him to anyone who is new to the market as I was.  Not only was he an excellent realtor, but I now consider him a friend.",
    rating: 5,
    categories: ["First-Time Buyers", "Professional Service"]
  },
  {
    title: "Continued Care, Perfect Rental",
    name: "María Paz Miranda González",
    location: "Toronto",
    text: "It was a pleasure working with Nalin. My partner and I were looking for a rental in Toronto and are currently settled in our new apartment. He guided us through the whole process. Nalin was always available, attentive and detail oriented. We felt comfortable working with him and asking a lot of questions. We have been in our apartment for several months now and he still calls to check in to see how everything is going with us. It's nice to work with someone who shows a real passion for providing great and professional service. We highly recommend Nalin as a realtor if you are looking for a new place to call home.",
    rating: 5,
    categories: []
  },
  {
    title: "No Pressure, Attentive Listening",
    name: "Chris Chip",
    location: "Toronto",
    text: "Nalin is the kind of agent that really takes time to listen to your needs and wants in a future home. Trust me, he's not the kind of agent that's looking to cash in on a quick sale. He's patient and personable, and always takes the time to explain the small details that a first time buyer might find intimidating. I look forward to working with him again.",
    rating: 5,
    categories: []
  },
  {
    title: "Market Insight, Great Price",
    name: "Guy",
    location: "Toronto",
    text: "My girlfriend and I had the pleasure of working with Nalin earlier this year.  His market knowledge (and patience) in our journey to a home was excellent.  He helped us find the home we were hoping for at a great price.  Highly recommend!",
    rating: 5,
    categories: []
  },
  {
    title: "Long Search, Honest Support",
    name: "John Davis",
    location: "Toronto",
    text: "Friendly, supportive service with your best interests in mind. Nalin was a delight to work with. He supported us through a long house-hunting process, was available whenever we needed him, and was always completely honest with us. We never felt pressured to make a decision that we didn't want to, and he was often the voice of reason when we were on the verge of making bad/emotional decisions. Can't recommend highly enough.",
    rating: 5,
    categories: ["Patient Service", "Long-Term Support", "Professional Service"]
  },
];

const categories = [
  "All",
  "Budget-Friendly",
  "Buying & Selling",
  "Competitive Market",
  "Data-Driven",
  "Educational",
  "Expert Guidance",
  "Family Homes",
  "Fast Closing",
  "First-Time Buyers",
  "Investment Properties",
  "Long-Term Support",
  "Market Knowledge",
  "Negotiation Skills",
  "Patient Service",
  "Professional Service",
  "Rental Services",
  "Responsive Service",
];


export const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.categories.includes(activeCategory));

  const displayedTestimonials = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 6);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What My Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real homebuyers I've helped - 60+ 5-star Google reviews
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedTestimonials.map((testimonial, index) => {
            const isExpanded = expandedCards.has(index);
            const needsExpand = testimonial.text.length > 200;

            return (
              <Card
                key={index}
                className="bg-card border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {testimonial.title}
                  </h3>
                  <div className="mb-4">
                    <p className={`text-foreground italic ${!isExpanded && needsExpand ? 'line-clamp-4' : ''}`}>
                      "{testimonial.text}"
                    </p>
                    {needsExpand && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="text-accent hover:text-accent/80 text-sm font-medium mt-2 flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <>Show Less <ChevronUp className="w-4 h-4" /></>
                        ) : (
                          <>Read More <ChevronDown className="w-4 h-4" /></>
                        )}
                      </button>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* See More Button */}
        {filteredTestimonials.length > 6 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              {showAll ? "Show Less" : `See All ${filteredTestimonials.length} Reviews`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
