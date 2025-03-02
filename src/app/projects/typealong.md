---
title: TypeAlong - The TypeReader
date: 2025-03-02
---
You might be reading the title and thinking this project has something to do with Typescript. You wouldn’t be too far off, actually—this is a SvelteKit + Typescript book typing game. **Here's [The Repo](https://github.com/noway-code/TypeAlongSvelte) if you want to take a peak!**

---

## Background

If you aren’t already familiar with typing games like [MonkeyType](https://monkeytype.com/), you know they usually show you a random set of words to type as fast and accurately as possible. These simple web apps help people get used to typing quickly without having to backtrack much, and they’re essential for learning [touch typing](https://en.wikipedia.org/wiki/Touch_typing). They’re also a fun way to compete with friends or even test your keyboard.

---

## Description

My project allows users to upload any [EPUB](https://en.wikipedia.org/wiki/EPUB) book—a common book format—choose the chapter or page they want to start on, and then type out the book! You can type full chapters at a time and stop whenever you want, with the app remembering your spot. It even displays your progress, current page, real-time WPM, and accuracy.

Inspired by the aesthetic of MonkeyType, TypeAlong elevates the experience by letting you type out your books while practicing your typing skills simultaneously. Nobody wants to re-read words, so the game encourages you to maintain high accuracy to keep reading along. Plus, there are a few extra features to keep you coming back:

- Popular themes and color customization
- A standard typing game mode for when you need a break from reading
- Two sets of typewriter noises you can easily enable
- Simple page selection to pick your starting point
- And many more improvements on the way!

---

## How It Was Made

_Read on if you want to see how the sausage is made—spoiler, it wasn’t pretty._

### Research

Every project starts with research. For me, that meant opening up an Obsidian folder with files for home, ideas, concepts, learning, and daily notes. Here’s how I broke it down:

- **Ideas:** A massive list of goals and stretch goals that eventually shaped the MVP.
- **Concepts and Learning:** Big research files with key facts, experimental work, and scratch knowledge.
- **Notes:** Daily notes on relevant progress.

I was diving into some new technologies for the very first time so I spent the first two weeks taking notes on Svelte and SvelteKit docs, learning the ins and outs of TypeScript versus JavaScript, and even exploring Electron. (A huge pain especially on Arch Linux (btw) with Wayland and SvelteKit!) I also worked on defining the project’s direction and basic architecture while checking out a popular library called EpubJS (foreshadowing).

### MonkeyType Clone

Like many projects, this one began with a [YouTube tutorial](https://www.youtube.com/watch?v=kMz_Ba_OF2w). After some experimentation, I realized that building a svelte typing game with only knowledge in React and backend JS was going to be challenging. I found a fantastic video that not only walked through a solid MonkeyType clone in my framework but was also written to encourage independent learning. Following that closely, I built an initial version and gained a basic understanding of the underlying logic.

### New Ground

Even though the video laid out the basics (and it was fantastic), there were many missing features for a true MonkeyType clone:

- **BACKSPACE** (seems trivial, yet was the hardest to add)
- Mount/Destroy mechanics
- Progress Tracking
- WPM/Accuracy metrics
- Backend integration
- Audio support

I spent an entire day digesting and mastering the code because it was the foundation of my project. Tackling each missing feature one by one, I eventually built a solid MonkeyType clone.

### EPUB Integration

Then came integrating EPUB functionality. I picked up [epub.js](https://github.com/futurepress/epub.js), the most popular JavaScript library for rendering EPUBs. This decision turned into a whirlwind of challenges. The documentation was ancient with little detail, and there were almost no examples. Every API or piece of info you’d expect was either missing or required hacks. Don't just take it from me, here's a GitHub issue on epub.js from **six years ago** highlighting some pretty key features — that are still missing! Despite the hurdles, I fought through and ended up with a hacked-together EPUB typing game—although, at that point, it really sucked.

![Pasted_image_20250302154709.png](/photos/Pasted_image_20250302154709.png)

### Hiatus

Surprise, surprise—I had to take a break. I picked up school again and focused on my senior design project, [LadyBug](https://github.com/LadyBugML/ladybug). At that time, the project was a buggy mess with memory leaks, race conditions, and barely working on Chrome. I was ready to let it die.

I don’t usually discuss mental health publicly, but as someone with ADHD, buggy and uninspiring projects completely drain me. Let’s be real—no one enjoys reading code, but having to sift through your own poorly written code, yikes. Yet, this project kept taunting me. It felt like a failure and a testament to my limitations as a developer.

After my senior design deadline hit, I got that itch to work on something new. Then a video titled [A rant on personal engineering projects](https://youtu.be/4jgTCayWlwc?si=0cuGK4APe-KxDkyH) called me out in just the right way. I revisited that dusty Obsidian folder, ignored previous constraints, and just went for it. I built a solid set of utilities to avoid ever touching CFI again (very spooky!) and finally found that spark of creativity.

### Revival

Cutting to the chase—I wouldn’t be writing this if I hadn’t reached that breakthrough. In two brain-destroying days, I achieved what I’d listed as my MVP. The feeling of going to bed after that final day was indescribable. Returning to a project is always frustrating, but finally succeeding was exhilarating. I couldn’t sleep because I was so excited about the progress and the future possibilities for this project.

Revisiting and reviving TypeAlong has been one of the most meaningful decisions I’ve made in a long time. Technical debt is technical death, and coming back to this project reaffirmed that creative freedom makes all the difference.

---
## Why I Made This Project

If you’re still with me—thanks for sticking around. I built TypeAlong because I needed more than just another scrappy, throwaway project. As someone who loves developing fast, small projects, I realized that while they’re fun, they often don’t go far on a resume. I craved something big, impressive, and accessible enough for anyone to try out—a project that could stand the test of time and prove that I could commit to a challenging idea.

It all began with a Discord message during my senior year. I was on the lookout for a **big** project—the kind that gets talked about on YouTube and inspires you to push your limits. Initially, I just added it to my backlog, but when winter break hit, I knew it was time to get serious. That spark, combined with a deep desire to create something meaningful, drove me to dive in headfirst. 
![Pasted_image_20250302165201.png](/photos/Pasted_image_20250302165201.png)

I also have to give a massive shoutout to my friend [Jacob](https://github.com/jdioso). If it weren’t for him, this project would still be a distant idea. Day after day, Jacob was working on his own projects, offering brilliant UI/UX advice, and lending an ear when I needed to vent. His support not only kept me motivated but also helped shape the project into something I’m truly proud of.

In the end, TypeAlong isn’t just about typing practice—it’s a testament to perseverance, collaboration, and the willingness to tackle challenges head-on. It stands as proof that even when things get messy, creativity and determination can transform a rough idea into something worth sharing.

---

Now, go type a book or something!