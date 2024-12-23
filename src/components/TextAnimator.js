"use client"

import { gsap } from 'gsap';
import { SplitType } from '../utils/splitType';
import { debounce } from '../utils/debounce';

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

class TextSplitter {
  constructor(textElement, options = {}) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    const { resizeCallback, splitTypeTypes } = options;

    this.textElement = textElement;
    this.onResize = typeof resizeCallback === 'function' ? resizeCallback : null;

    const splitOptions = splitTypeTypes ? { types: splitTypeTypes } : {};
    this.splitText = new SplitType(this.textElement, splitOptions);

    if (this.onResize) {
      this.initResizeObserver();
    }
  }

  initResizeObserver() {
    this.previousContainerWidth = null;

    let resizeObserver = new ResizeObserver(
      debounce((entries) => this.handleResize(entries), 100)
    );
    resizeObserver.observe(this.textElement);
  }

  handleResize(entries) {
    const [{ contentRect }] = entries;
    const width = Math.floor(contentRect.width);
    if (this.previousContainerWidth && this.previousContainerWidth !== width) {
      this.splitText.split();
      this.onResize();
    }
    this.previousContainerWidth = width;
  }

  revert() {
    return this.splitText.revert();
  }

  getLines() {
    return this.splitText.lines;
  }

  getWords() {
    return this.splitText.words;
  }

  getChars() {
    return this.splitText.chars;
  }
}

export class TextAnimator {
  constructor(textElement) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    this.textElement = textElement;
    this.splitText();
  }

  splitText() {
    this.splitter = new TextSplitter(this.textElement, {
      splitTypeTypes: 'words, chars'
    });

    this.originalChars = this.splitter.getChars().map(char => char.innerHTML);
  }

  animate() {
    this.reset();

    const chars = this.splitter.getChars();

    chars.forEach((char, position) => {
      let initialHTML = char.innerHTML;
      let repeatCount = 0;

      gsap.fromTo(char, {
        opacity: 0
      },
      {
        duration: 0.03,
        onStart: () => {
          gsap.set(char, { '--opa': 1 });
        },
        onComplete: () => {
          gsap.set(char, {innerHTML: initialHTML, delay: 0.03})
        },
        repeat: 3,
        onRepeat: () => {
          repeatCount++;
          if (repeatCount === 1) {
            gsap.set(char, { '--opa': 0 });
          }
        },
        repeatRefresh: true,
        repeatDelay: 0.04,
        delay: (position+1)*0.07,
        innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
        opacity: 1
      });
    });
  }

  reset() {
    const chars = this.splitter.getChars();
    chars.forEach((char, index) => {
      gsap.killTweensOf(char);
      char.innerHTML = this.originalChars[index];
    });
  }
}
