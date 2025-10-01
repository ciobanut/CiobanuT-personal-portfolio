---
layout: '../../layouts/SingleWorkLayout.astro'
title: 'A platform where navigators meet service providers'
isDraft: false
pubDate: '06-08-2025'
year: 2025
website: 'https://myprivateorder.com'
image:
  src: '/images/works/myprivateorder.com.avif'
  alt: 'Astro website'
description: 'A global platform built for sailors to easily discover and connect with local service providers in the ports where they anchor. Trusted reviews, personalized profiles, and real-time access to essential port services.'

review:
  author: 'Petrian Duceac'
  avatar: '/images/petrian.png'
  message: 'I was looking for a custom application developer to create a web application for seafarers, and Tudor nailed it! The functionality and design are exactly what we were looking for. Great developer to work with.'
client:
  name: 'MyPrivateOrder.com'
  logo: '/images/works/myprivateorder.com.svg'
business_niche: 'marine'
deadline: 'six months'
stacks:
  - 'laravel'
  - 'tailwindcss'
  - 'livewire'
languages:
  - 'php'
timeline:
  - 0:
    date: 'a few years'
    title: 'The idea comes from a real-world problem'
    desc: 'My client is a working seafarer who feels firsthand how difficult it is for seafarers to find reliable service when they arrive in unfamiliar ports. This sparked the idea of ​​creating a platform that would connect them with verified local providers.'
  - 1:
    date: 'summer 2024'
    title: 'We outline the solution'
    desc: 'We met and started thinking about how to solve this problem. Even though the site now seems very simple, at that time neither I nor the client understood how it should look and function.'
  - 98:
    date: 'august 2024'
    title: 'Learning Laravel'
    desc: "I should mention that before this project I had only built websites on WordPress. I didn't know Laravel. But I was determined that it was time to learn it. I took courses on Laracast, YouTube, the official documentation and Google. Because of this it took me longer to create it."
  - 98:
    date: 'september 2024'
    title: 'I started building the platform'
    desc: 'With a very modest technical brief, using Laravel and Livewire, I started developing the basic structure of the website. My goal was to make it simple, fast, and useful - both for users looking for services and for providers looking for visibility.'
  - 98:
    date: 'octomber'
    title: 'Development Process'
    desc: 'Over the following months, I implemented Google user registration, dual user profiles (sailor/provider), a review system, port-based search, and a clean dashboard interface using Tailwind and MaryUI.'
  - 98:
    date: '30 december 2024'
    title: 'Initial Deployment'
    desc: 'The MVP was deployed and made public. Sailors can now register, find services in ports, and leave ratings — while providers can manage their listings and receive feedback from users.'
  - 98:
    date: 'march 2025'
    title: 'Frontend Performance Optimization'
    desc: 'I optimized the frontend, achieving a page load time of 3 seconds on the first visit and under 2 seconds on subsequent visits.'
  - 98:
    date: 'april 2025'
    title: 'Improved Search & Dark Mode Implementation'
    desc: 'I replaced the original Livewire-based port search with a super-fast Typesense integration. I also designed a dark mode that activates instantly (without page reload) based on the device theme.'
  - 98:
    date: 'may 2025'
    title: 'Automation Integration'
    desc: 'I developed custom API endpoints to integrate the application with n8n, enabling the automation of several processes.'
  - 99:
    date: 'june 2025'
    title: 'Authentication & Admin Dashboard'
    desc: 'I implemented Google authentication using Laravel Socialite and built an admin panel with Filament to visualize and manage database data efficiently.'
  - 99:
    date: 'Ongoing'
    title: 'Maintenance and feature updates'
    desc: 'The platform continues to evolve. I’m actively maintaining it, improving the user experience, fixing bugs, and developing new features based on user feedback and real-world needs.'
---

This is a web platform designed to connect sailors from around the world with trusted service providers located in the ports where they dock. The platform offers a seamless experience for both sailors and providers.

Sailors can easily register using Google authentication, create personalized profiles, and search for port-based services such as mechanics, electricians, internet access, laundry, provisioning, and more. Each service provider is reviewed and rated by users, ensuring a transparent and community-driven reputation system.

The platform includes a dual-profile system, allowing users to register as either a sailor or a provider, with the ability to switch roles later. Service providers can manage their profile, describe their services, and receive feedback directly from clients.

With a clean and responsive interface, advanced filtering options, and real-time updates powered by Livewire, the platform is optimized for mobile use by sailors on the go. The backend architecture includes features like role-based access, smart review policies (only one review per user/provider), and automated rating recalculations.

This project aims to modernize how sailors access critical port services while giving small local providers global visibility.
