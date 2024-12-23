"use client"

import Head from 'next/head';
import { useEffect } from 'react';
import { TextAnimator } from '../components/TextAnimator';

export default function Home() {
  useEffect(() => {
    const init = () => {
      document.querySelectorAll('.list__item').forEach(item => {
        const cols = Array.from(item.querySelectorAll('.hover-effect'));
        const animators = cols.map(col => new TextAnimator(col));

        item.addEventListener('mouseenter', () => {
          animators.forEach(animator => animator.animate());
        });
      });

      document.querySelectorAll('a.hover-effect').forEach(item => {
        const animator = new TextAnimator(item);
        item.addEventListener('mouseenter', () => {
          animator.animate();
        });
      });
    };

    init();
  }, []);

  return (
    <div>
      <Head>
        <title>Line Text Hover Animations | Demo 1 | Codrops</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Nanum+Gothic+Coding&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <header className="frame">
          <h1 className="frame__title">
            <a className="hover-effect hover-effect--cursor-square" href="https://tympanus.net/codrops/demos/?tag=hover">
              #Hover
            </a>{' '}
            Animations on Line{' '}
            <a className="hover-effect hover-effect--cursor-square" href="https://tympanus.net/codrops/demos/?tag=typography">
              #Typography
            </a>
          </h1>
          <a className="frame__back hover-effect hover-effect--cursor-square" href="https://tympanus.net/codrops/?p=78645">
            Article
          </a>
          <a className="frame__archive hover-effect hover-effect--cursor-square" href="https://tympanus.net/codrops/demos/">
            All demos
          </a>
          <a className="frame__github hover-effect hover-effect--cursor-square" href="https://github.com/codrops/LineTextHoverAnimations/">
            GitHub
          </a>
          <nav className="frame__demos">
            <span>Variations:</span>
            <span>V1</span>
            <a className="hover-effect hover-effect--cursor-square" href="index2.html">
              V2
            </a>
            <a className="hover-effect hover-effect--cursor-square" href="index3.html">
              V3
            </a>
            <a className="hover-effect hover-effect--cursor-square" href="index4.html">
              V4
            </a>
          </nav>
        </header>
        <section className="content">
          <h2 className="content__title">Volcanic Eruptions</h2>
          <ul className="list list--box">
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Mount Vespera</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Planet Thalassa</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2157-03-14</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">6</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Kraxion</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Exo-Planet Zyra</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2243-11-09</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">7</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Helion Peak</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Planet Elara</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2180-05-18</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">5</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Pyrosphere</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Moon Xanthe</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2291-06-15</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">6</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Vulcanus</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Asteroid B-612</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2312-08-22</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">5</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Tarkons Fury</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Planet Drakonis</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2455-12-01</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">8</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Aether Plume</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Planet Ganymede</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2379-04-10</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">4</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Mount Zenith</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Planet Lumina</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2392-09-21</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">6</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Inferno Crest</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Moon Rhea</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2410-03-08</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">5</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">Jacobs Hill</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">Exoplanet HU5</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2205-12-09</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">7</span>
            </li>
          </ul>
          <h2 className="content__title spacer">Event Codes</h2>
          <ul className="list list--alt">
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">2178-04-21</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2190-07-16</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">X7</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2205-12-08</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">2234-02-11</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2241-09-25</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">A5</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2253-01-30</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">2301-06-17</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2312-03-05</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">B9</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2320-08-14</span>
            </li>
            <li className="list__item">
              <span className="list__item-col hover-effect hover-effect--cursor-square">2404-11-19</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2415-07-22</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">L0</span>
              <span className="list__item-col hover-effect hover-effect--cursor-square">2428-05-29</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
