'use client'
import React, { useEffect, useRef } from 'react'

export default function RenderRaw() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Execute inline scripts in global scope

    try {
      (new Function(``))();
    } catch (e) { console.error('Script 0 error', e); }

    // Load external scripts dynamically (they reference external files). You may need to place these files under /public or adjust URLs.
    const s = document.createElement('script'); s.src = `main.js`; s.async = false; document.body.appendChild(s);

  }, []);

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={ __html: `<header class="p-6 border-b border-gray-800">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="text-lg md:text-xl font-semibold tracking-wide title-serif">ZAINAL FERDIANSYAH — Filmmaker</div>
      <div class="flex items-center space-x-4">
        <nav class="hidden md:flex space-x-5 text-sm tracking-wide">
          <button class="nav-btn active" data-tab="films">Film</button>
         <a href="editor.html"> <button class="nav-btn" data-tab="editor" >Editor</button></a>
          <button class="nav-btn" data-tab="bts">Behind the Scene</button>
        </nav>
        <button id="themeToggle">Night</button>
        <button id="menuBtn" class="md:hidden px-3 py-2 border rounded border-gray-700">Menu</button>
      </div>
    </div>
  </header>

  <main class="flex-1 max-w-6xl mx-auto p-6">
    <!-- FILMS tab -->
    <section id="films" class="tab-section">
      <!-- ABOUT -->
      <div class="mb-12 text-center">
        <h1 class="text-2xl font-medium mb-3 title-serif">About Me</h1>
        <p class="text-gray-400 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
          I’m <span class="text-white font-medium">Zainal Ferdiansyah</span>, a filmmaker based in Bandung. 
          I completed my Bachelor’s degree in Film Photography at Pasundan University. I started my journey in film as a set designer, art director, and writer. Mangkat is my debut in narrative fiction directing, following my earlier experience directing the documentary short Deden Sambas and working as an art director on the short films Halaman Terakhir and Switchside. Through my works, I’m deeply interested in exploring themes of identity, self-discovery, and transitional spaces reflecting my sensitivity to human experiences and cultural shifts.
        </p>
      </div>

      <!-- FILM SECTION -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 class="text-2xl font-medium title-serif">Films</h1>
        <div class="flex flex-wrap items-center gap-2 text-sm">
          <button class="category-btn px-3 py-1.5 rounded-md border border-gray-700 active" data-cat="all">All</button>
          <button class="category-btn px-3 py-1.5 rounded-md border border-gray-700" data-cat="documentary">Documentary</button>
          <button class="category-btn px-3 py-1.5 rounded-md border border-gray-700" data-cat="fiction">Fiction</button>
          <button class="category-btn px-3 py-1.5 rounded-md border border-gray-700" data-cat="company">Company Profile</button>
        </div>
      </div>

      <div id="filmGallery" class="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
    </section>


    <!-- BTS tab -->
<section id="bts" class="tab-section hidden">
      <h2 class="text-2xl font-medium mb-8 title-serif text-center">Behind The Scene</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[10rem]">
        
        <div class="col-span-1 row-span-2">
          <img class="film-thumb h-full w-full object-cover" src="assets/bts/bts4.jpg" alt="BTS Photo 1">
        </div>
        
        <div class="col-span-2">
          <img class="film-thumb h-full w-full object-cover" src="assets/bts/bts2.jpg" alt="BTS Photo 2">
        </div>
        
        <div class="col-span-1">
          <img class="film-thumb h-full w-full object-cover" src="assets/bts/bts3.jpg" alt="BTS Photo 3">
        </div>
        
        <div class="col-span-1">
          <img class="film-thumb h-full w-full object-cover" src="assets/bts/bts1.jpg" alt="BTS Photo 4">
        </div>
        
        <div class="col-span-2">
          <img class="film-thumb h-full w-full object-cover" src="assets/bts/bts5.jpg" alt="BTS Photo 5 (Placeholder)">
        </div>
        
        <div class="col-span-4 h-[12rem]">
          <img class="film-thumb h-full w-full object-cover" src="assets/bts/bts6.jpg" alt="BTS Photo 6 (Placeholder)">
        </div>
       

        

      </div>
    </section>
  </main>

  <footer class="border-t border-gray-800 p-6 text-sm">
    <div class="max-w-6xl mx-auto text-center text-gray-500">© Zainal Ferdiansyah — All rights reserved</div>
  </footer>

  <!-- lightbox -->
  <div id="lightbox" class="fixed inset-0 bg-black/80 hidden items-center justify-center p-6">
    <div class="max-w-4xl w-full relative">
      <button id="closeLight" class="absolute right-3 top-3 z-20 px-3 py-1 text-sm bg-black/40 rounded">Close</button>
      <img id="lightImg" src="" class="w-full max-h-[80vh] object-contain rounded-lg" alt="">
    </div>
  </div>

  ` } />
  )
}
