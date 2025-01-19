import React from "react";

const Footer = () => {
  return (
    <>
     <footer class="bg-gray-900 text-gray-300 py-10 mt-10 ">
  <div class="container mx-auto px-4">
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
     
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">About Us</h3>
        <p class="text-sm">
          We are a company dedicated to providing the best solutions for your needs. Our team works tirelessly to ensure quality and satisfaction for all our clients.
        </p>
      </div>
      
     
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors">About</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors">Services</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Newsletter</h3>
        <p class="text-sm mb-4">
          Subscribe to our newsletter to stay updated on our latest news and offers.
        </p>
        <form class="flex space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full p-2 rounded bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

 
    <hr class="border-gray-700 mb-6" />

  
    <div class="flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm">&copy; 2025 Your Company Name. All rights reserved.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 3.59 8 8 8h4v-7h-2v-2h2v-1.44c0-2.28 1.64-3.56 3.93-3.56.84 0 1.69.07 2.5.2v2.89h-1.5c-1.07 0-1.28.51-1.28 1.26V13h2.56l-.5 2h-2.06v7h4c4.41 0 8-3.59 8-8 0-5.52-4.48-10-10-10z"
            />
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.82.5-1.73.86-2.7 1.05A4.492 4.492 0 0015.62 4c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.69.11 1.02C7.72 9.4 4.1 7.52 1.67 4.51c-.38.65-.6 1.4-.6 2.21 0 1.53.78 2.87 1.95 3.66-.72-.02-1.4-.22-2-.55v.06c0 2.14 1.52 3.92 3.54 4.32-.37.1-.76.16-1.16.16-.28 0-.56-.03-.83-.08.56 1.74 2.2 3.01 4.14 3.05A9.053 9.053 0 012 19.54 12.75 12.75 0 007 21c8.27 0 12.79-6.86 12.79-12.79 0-.2-.01-.41-.03-.61.88-.64 1.63-1.44 2.23-2.35z"
            />
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M21.54 2H2.46C1.65 2 1 2.65 1 3.46v17.08c0 .81.65 1.46 1.46 1.46h10.23v-7.43H9.88v-2.9h2.81V9.39c0-2.78 1.7-4.29 4.18-4.29 1.19 0 2.21.09 2.51.13v2.9h-1.73c-1.36 0-1.62.65-1.62 1.6v2.1h3.24l-.42 2.9h-2.82V22h5.54c.81 0 1.46-.65 1.46-1.46V3.46c0-.81-.65-1.46-1.46-1.46z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;