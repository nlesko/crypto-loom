<template>
    <div class="w-full">
        <section>
            <div class="hero-section bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div class="hero-content text-center md:text-left md:w-1/2">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Track and Trade Your Favorite Cryptocurrencies with Ease</h1>
                    <p class="text-lg sm:text-xl mb-8">Stay on top of the market with real-time data and seamless trading.</p>
                    <div class="flex justify-center md:justify-start space-x-4">
                    <a href="#" class="cta-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">Get Started</a>
                    <a href="#" class="cta-button bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded">Learn More</a>
                    </div>
                </div>
                <div class="hero-image mt-10 md:mt-0 md:w-1/2">
                    <img src="~/assets/img/crypto-loom-hero.png" alt="Crypto Loom" class="w-full h-auto rounded-lg shadow-lg">
                </div>
                </div>
                <div class="features mt-12 flex justify-center space-x-6">
                <div class="feature flex items-center space-x-2">
                    <MdiIcon icon="mdiChartLine" class="text-blue-500 text-2xl" />
                    <span>Real-time Tracking</span>
                </div>
                <div class="feature flex items-center space-x-2">
                    <MdiIcon icon="mdiShieldCheck" class="text-blue-500 text-2xl" />
                    <span>Secure Trading</span>
                </div>
                <div class="feature flex items-center space-x-2">
                    <MdiIcon icon="mdiChartPie" class="text-blue-500 text-2xl" />
                    <span>Comprehensive Analytics</span>
                </div>
                </div>
            </div>
        </section>
        <section class="features-overview py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Why Choose Crypto Loom?</h2>
      <p class="text-lg mb-12">Explore the powerful features that make Crypto Loom your ultimate cryptocurrency tracking and trading platform.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="feature-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <MdiIcon icon="mdiChartLine" class="text-blue-500 text-4xl mb-4" />
          <h3 class="text-2xl font-semibold mb-2">Real-time Tracking</h3>
          <p class="text-base">Stay updated with real-time price tracking for all major cryptocurrencies.</p>
        </div>
        <div class="feature-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <MdiIcon icon="mdiShieldCheck" class="text-blue-500 text-4xl mb-4" />
            <h3 class="text-2xl font-semibold mb-2">Secure Trading</h3>
            <p class="text-base">Trade securely with our state-of-the-art encryption and security protocols.</p>
        </div>
        <div class="feature-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <MdiIcon icon="mdiChartPie" class="text-blue-500 text-4xl mb-4" />
          <h3 class="text-2xl font-semibold mb-2">Comprehensive Analytics</h3>
          <p class="text-base">Analyze market trends with comprehensive analytics and data insights.</p>
        </div>
        <div class="feature-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <MdiIcon icon="mdiWallet" class="text-blue-500 text-4xl mb-4" />
          <h3 class="text-2xl font-semibold mb-2">Multi-currency Wallet</h3>
          <p class="text-base">Manage multiple cryptocurrencies in one secure wallet.</p>
        </div>
        <div class="feature-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <MdiIcon icon="mdiBellAlert" class="text-blue-500 text-4xl mb-4" />
          <h3 class="text-2xl font-semibold mb-2">Price Alerts</h3>
          <p class="text-base">Set custom price alerts to stay informed about market movements.</p>
        </div>
        <div class="feature-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <MdiIcon icon="mdiLock" class="text-blue-500 text-4xl mb-4" />
          <h3 class="text-2xl font-semibold mb-2">Enhanced Privacy</h3>
          <p class="text-base">Your data is private and secure, thanks to our strict privacy policies.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="user-testimonials py-16 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">What Our Users Say</h2>
      <p class="text-lg mb-12">Discover how Crypto Loom has transformed the way our users track and trade cryptocurrencies.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
          <div class="flex justify-center mb-4">
            <img :src="testimonial.photo" alt="User photo" class="w-16 h-16 rounded-full">
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ testimonial.name }}</h3>
          <p class="text-base">"{{ testimonial.quote }}"</p>
        </div>
      </div>
    </div>
  </section>
  <section class="visual-demos py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Visual Demonstrations</h2>
      <p class="text-lg mb-12">See Crypto Loom in action. Watch our tutorials to get the most out of our platform.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="demo in demos" :key="demo.title" class="demo-card bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-left">
          <div class="relative mb-4">
            <img :src="demo.thumbnail" alt="Demo thumbnail" class="w-full rounded">
            <div class="absolute inset-0 flex items-center justify-center">
              <button class="bg-blue-500 text-white p-4 rounded-full">
                <i class="mdi mdi-play text-3xl"></i>
              </button>
            </div>
          </div>
          <h3 class="text-2xl font-semibold mb-2">{{ demo.title }}</h3>
          <p class="text-gray-700 dark:text-gray-300">{{ demo.description }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="pricing-plans py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Choose Your Plan</h2>
      <p class="text-lg mb-12">Flexible plans to meet your cryptocurrency tracking and trading needs.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="pricing-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">Basic</h3>
          <p class="text-4xl font-bold mb-4">$0</p>
          <ul class="text-left mb-6">
            <li class="mb-2">✓ Real-time Tracking</li>
            <li class="mb-2">✓ Price Alerts</li>
            <li class="mb-2">✓ Basic Analytics</li>
          </ul>
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
        </div>
        <div class="pricing-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">Pro</h3>
          <p class="text-4xl font-bold mb-4">$9.99<span class="text-base">/mo</span></p>
          <ul class="text-left mb-6">
            <li class="mb-2">✓ All Basic Features</li>
            <li class="mb-2">✓ Secure Trading</li>
            <li class="mb-2">✓ Advanced Analytics</li>
            <li class="mb-2">✓ Multi-currency Wallet</li>
          </ul>
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Upgrade</button>
        </div>
        <div class="pricing-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">Premium</h3>
          <p class="text-4xl font-bold mb-4">$19.99<span class="text-base">/mo</span></p>
          <ul class="text-left mb-6">
            <li class="mb-2">✓ All Pro Features</li>
            <li class="mb-2">✓ Priority Support</li>
            <li class="mb-2">✓ Exclusive Insights</li>
            <li class="mb-2">✓ Personalized Alerts</li>
          </ul>
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Go Premium</button>
        </div>
      </div>
    </div>
  </section>
  <section class="faq-section py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
      <p class="text-lg mb-12">Have questions? We've got answers. Find out more about Crypto Loom and how it can help you manage your cryptocurrency portfolio.</p>
      <div class="faq-container mx-auto max-w-4xl">
        <div v-for="faq in faqs" :key="faq.question" class="faq-item mb-6">
          <div @click="toggleFaq(faq)" class="faq-question bg-gray-100 dark:bg-gray-800 p-4 rounded-lg cursor-pointer flex justify-between items-center">
            <h3 class="text-xl font-semibold">{{ faq.question }}</h3>
            <i :class="faq.open ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'" class="text-gray-500 dark:text-gray-400"></i>
          </div>
          <div v-if="faq.open" class="faq-answer bg-gray-50 dark:bg-gray-700 p-4 mt-2 rounded-lg">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="get-started py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-center">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-4">Get Started with Crypto Loom Today</h2>
      <p class="text-lg mb-8">Join thousands of satisfied users who are tracking and trading cryptocurrencies effortlessly with Crypto Loom.</p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">Sign Up Now</button>
    </div>
  </section>
  <section class="latest-news py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Latest News</h2>
      <p class="text-lg mb-12">Stay updated with the latest trends and insights in the cryptocurrency world.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.title" class="news-card bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <img :src="post.image" alt="News image" class="mb-4 rounded">
          <h3 class="text-2xl font-semibold mb-2">{{ post.title }}</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">{{ post.description }}</p>
          <a :href="post.link" class="text-blue-500 hover:text-blue-600">Read More</a>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-2">{{ post.date }} by {{ post.author }}</div>
        </div>
      </div>
    </div>
  </section>
  <section class="testimonials py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">What Our Users Say</h2>
      <p class="text-lg mb-12">Hear from our community about how Crypto Loom has transformed their cryptocurrency experience.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonialss" :key="testimonial.name" class="testimonial-card bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-left">
          <div class="flex items-center mb-4">
            <img :src="testimonial.photo" alt="User photo" class="w-12 h-12 rounded-full mr-4">
            <div>
              <h3 class="text-xl font-semibold">{{ testimonial.name }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.role }}</p>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300">“{{ testimonial.text }}”</p>
        </div>
      </div>
    </div>
  </section>

    <!-- FAQ section -->
    
    <!-- <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <MdiIcon icon="ArrowUp" :size="20" />
      </a>
    </div> -->
    </div>
</template>

<script setup>
// import aosMixin from '@/mixins/aos'
definePageMeta({
    layout: 'public'
});

// Use the mixin
// aosMixin()

const selected = ref(0)
const dropdownConcurency = ref(false)
const dropdownCrypto = ref(false)
const testimonialss = [
  {
    name: 'Alice Johnson',
    role: 'Crypto Trader',
    photo: 'path-to-photo1.jpg',
    text: 'Crypto Loom has revolutionized the way I track my investments. The real-time data is invaluable!',
  },
  {
    name: 'Bob Smith',
    role: 'Blockchain Developer',
    photo: 'path-to-photo2.jpg',
    text: 'The analytics tools provided by Crypto Loom are top-notch. I highly recommend it to anyone in the crypto space.',
  },
  {
    name: 'Carol Davis',
    role: 'Crypto Enthusiast',
    photo: 'path-to-photo3.jpg',
    text: 'I love the user-friendly interface and the comprehensive features. Crypto Loom makes managing my portfolio a breeze.',
  },
  // Add more testimonials as needed
]

const demos = [
  {
    title: 'Getting Started with Crypto Loom',
    description: 'Learn the basics of setting up your account and getting started with Crypto Loom.',
    thumbnail: 'path-to-thumbnail1.jpg',
  },
  {
    title: 'Tracking Your Portfolio',
    description: 'Discover how to add your assets and track their performance in real-time.',
    thumbnail: 'path-to-thumbnail2.jpg',
  },
  {
    title: 'Advanced Analytics Tools',
    description: 'Explore the advanced analytics tools available on Crypto Loom for in-depth market analysis.',
    thumbnail: 'path-to-thumbnail3.jpg',
  },
  // Add more demos as needed
]
const features = [
  {
    icon: 'mdi-chart-line',
    title: 'Real-time Tracking',
    description: 'Stay updated with real-time price tracking for all major cryptocurrencies.',
  },
  {
    icon: 'mdi-shield-check',
    title: 'Secure Trading',
    description: 'Trade securely with our state-of-the-art encryption and security protocols.',
  },
  {
    icon: 'mdi-chart-pie',
    title: 'Comprehensive Analytics',
    description: 'Analyze market trends with comprehensive analytics and data insights.',
  },
  {
    icon: 'mdi-wallet',
    title: 'Multi-currency Wallet',
    description: 'Manage multiple cryptocurrencies in one secure wallet.',
  },
  {
    icon: 'mdi-bell-alert',
    title: 'Price Alerts',
    description: 'Set custom price alerts to stay informed about market movements.',
  },
  {
    icon: 'mdi-lock',
    title: 'Enhanced Privacy',
    description: 'Your data is private and secure, thanks to our strict privacy policies.',
  },
]
const testimonials = [
  {
    name: 'Alice Johnson',
    photo: 'path-to-alice-photo.jpg',
    quote: 'Crypto Loom has completely changed the way I track my investments. The real-time updates are incredibly helpful.',
  },
  {
    name: 'Michael Smith',
    photo: 'path-to-michael-photo.jpg',
    quote: 'The secure trading features give me peace of mind. I can trade confidently knowing my assets are protected.',
  },
  {
    name: 'Sarah Lee',
    photo: 'path-to-sarah-photo.jpg',
    quote: 'I love the comprehensive analytics. It helps me make informed decisions and stay ahead of market trends.',
  },
  // Add more testimonials as needed
]
const plans = [
  {
    name: 'Basic',
    price: '$0',
    features: ['Real-time Tracking', 'Price Alerts', 'Basic Analytics'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$9.99/mo',
    features: ['All Basic Features', 'Secure Trading', 'Advanced Analytics', 'Multi-currency Wallet'],
    cta: 'Upgrade',
  },
  {
    name: 'Premium',
    price: '$19.99/mo',
    features: ['All Pro Features', 'Priority Support', 'Exclusive Insights', 'Personalized Alerts'],
    cta: 'Go Premium',
  },
]
const faqs = ref([
  {
    question: 'What is Crypto Loom?',
    answer: 'Crypto Loom is a comprehensive cryptocurrency tracking and trading platform designed to help you manage your digital assets efficiently.',
    open: false,
  },
  {
    question: 'How do I track my investments?',
    answer: 'With Crypto Loom, you can track your investments in real-time using our advanced tracking tools. Simply add your portfolio and let our platform do the rest.',
    open: false,
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we prioritize your security. Crypto Loom uses state-of-the-art encryption and security protocols to ensure your data is always safe.',
    open: false,
  },
  {
    question: 'Can I trade cryptocurrencies on Crypto Loom?',
    answer: 'Currently, Crypto Loom focuses on tracking cryptocurrencies, but we are planning to introduce secure trading features soon.',
    open: false,
  },
  {
    question: 'What are the pricing plans?',
    answer: 'Crypto Loom offers flexible pricing plans to suit your needs, including a free Basic plan, a Pro plan at $9.99/month, and a Premium plan at $19.99/month.',
    open: false,
  },
])

const toggleFaq = (faq) => {
  faq.open = !faq.open
}


const currencySelected = ref({
  img: 'country-icon/eng.png',
  name: 'USD',
})
const currencies = ref([
  {
    img: 'country-icon/eng.png',
    name: 'USD',
  },
])
const cryptoSelected = ref({
  img: 'crypto-icon/bitcoin.png',
  name: 'BTC',
})
const cryptocurrencies = ref([
  {
    img: 'crypto-icon/bitcoin.png',
    name: 'BTC',
  },
])
const trendings = ref([
  {
    id: 1,
    name: 'Bitcoin',
    price: 43180.13,
    logo: 'bitcoin.png',
    increase: true,
    data: [40, 35, 60, 75, 60, 75, 50],
  },
  {
    id: 2,
    name: 'Ethereum',
    price: 3480.65,
    logo: 'ethereum.png',
    increase: false,
    data: [25, 30, 60, 50, 80, 55, 80],
  },
  {
    id: 3,
    name: 'Solana',
    price: 150.2,
    logo: 'solana.png',
    increase: true,
    data: [40, 45, 40, 80, 50, 60, 35],
  },
  {
    id: 4,
    name: 'Dogecoin',
    price: 0.1572,
    logo: 'dogecoin.png',
    increase: true,
    data: [35, 70, 60, 80, 50, 60, 40],
  },
])
const topGainers = ref([
  {
    id: 1,
    name: 'PAPPAY',
    price: 0.00374,
    logo: 'pappay.png',
    increase: true,
    data: [30, 50, 45, 60, 70, 40, 45],
  },
  {
    id: 2,
    name: 'Bitcoin Asia',
    price: 0.02096,
    logo: 'bitcoin-asia.png',
    increase: true,
    data: [25, 60, 50, 60, 35, 50, 70],
  },
  {
    id: 3,
    name: 'MoonRock',
    price: 0.004907,
    logo: 'moonrock.png',
    increase: true,
    data: [40, 35, 40, 25, 50, 70, 45],
  },
  {
    id: 4,
    name: 'NinjaFloki',
    price: 0.000123,
    logo: 'ninjafloki.png',
    increase: true,
    data: [45, 35, 40, 30, 25, 45, 35],
  },
])
const recents = ref([
  {
    id: 1,
    name: 'MetaCraft',
    price: 0.0608,
    logo: 'metacraft.png',
    increase: false,
    data: [40, 50, 45, 60, 35, 40, 45],
  },
  {
    id: 2,
    name: 'Frog',
    price: 0.5875,
    logo: 'frog.png',
    increase: false,
    data: [25, 50, 45, 48, 40, 60, 45],
  },
  {
    id: 3,
    name: 'Musk Doge',
    price: 0.04041,
    logo: 'musk-doge.png',
    increase: true,
    data: [25, 35, 60, 45, 50, 45, 45],
  },
  {
    id: 4,
    name: '2SHARE',
    price: 1366.24,
    logo: '2share.png',
    increase: true,
    data: [35, 30, 60, 50, 35, 45, 40],
  },
])
const posts = [
  {
    title: 'Understanding Bitcoin and Its Impact on the Market',
    description: 'An in-depth look at Bitcoin and how it continues to influence the cryptocurrency landscape.',
    image: 'path-to-image1.jpg',
    link: '#',
    date: 'June 30, 2024',
    author: 'John Doe',
  },
  {
    title: 'Top 5 Altcoins to Watch in 2024',
    description: 'A review of the most promising altcoins that could shape the future of cryptocurrency.',
    image: 'path-to-image2.jpg',
    link: '#',
    date: 'June 28, 2024',
    author: 'Jane Smith',
  },
  {
    title: 'Crypto Loom Update: New Features and Improvements',
    description: 'Discover the latest updates to the Crypto Loom platform, designed to enhance your experience.',
    image: 'path-to-image3.jpg',
    link: '#',
    date: 'June 25, 2024',
    author: 'Crypto Loom Team',
  },
  // Add more posts as needed
]
const accordions = ref([
  {
    title: 'Why should I choose NEFA?',
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: 'How secure is NEFA?',
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: 'Do I have to buy a whole Bitcoin?',
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: 'How do I actually buy Bitcoin?',
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
])
const steps = ref([
  {
    img: 'sign-up.png',
    title: 'Sign Up',
    description:
      'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile',
  },
  {
    img: 'fund.png',
    title: 'Fund',
    description:
      'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet',
  },
  {
    img: 'buy-crypto.png',
    title: 'Buy Crypto',
    description:
      'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere',
  },
])
</script>

<style scoped>
.features-overview {
  transition: background-color 0.3s ease;
}
.feature-card {
  transition: box-shadow 0.3s ease;
}
.user-testimonials {
  transition: background-color 0.3s ease;
}
.testimonial-card {
  transition: box-shadow 0.3s ease;
}
.testimonial-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.pricing-plans {
  transition: background-color 0.3s ease;
}
.pricing-card {
  transition: box-shadow 0.3s ease;
}
.pricing-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.faq-question {
  transition: background-color 0.3s ease;
}
.faq-question:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.get-started {
  transition: background-color 0.3s ease;
}
.get-started button {
  transition: background-color 0.3s ease;
}
.latest-news {
  transition: background-color 0.3s ease;
}
.news-card {
  transition: box-shadow 0.3s ease;
}
.news-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.testimonials {
  transition: background-color 0.3s ease;
}
.testimonial-card {
  transition: box-shadow 0.3s ease;
}
.testimonial-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.visual-demos {
  transition: background-color 0.3s ease;
}
.demo-card {
  transition: box-shadow 0.3s ease;
}
.demo-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
button {
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}


.text-header-gradient {
    background: rgb(57, 132, 244);
    background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.bg-partner {
    background: url('../assets/img/partner/background.png');
    background-size: cover;
    background-position: center;
}

.bg-trading-tools {
    background: url('../assets/img/bg-trading-tools.webp');
    background-size: cover;
    background-position: center;
}

.max-h-0 {
    max-height: 0;
}
</style>