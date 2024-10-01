---
title: Thoughts -- JPEG is weird!
date: 2024-05-01
---

I'm currently in the process of taking a robot vision class so the idea of edge detection and compression is fresh in my mind. Man, JPEG is weird.
I've been reading around through the history and controversies, and I had no idea the impact it had on the world when it came out. Seriously, since
1992, the JPEG standard has been the most widely used image compression standard in the world. It's used in everything from digital cameras to the
internet.

It's just a collection of algorithms that compresses images in a lossy way. It's not even the best at what it does, but it's the most widely used. It
works by breaking the image into blocks, then transforming those blocks using a discrete cosine transform (DCT) to isolate frequencies. The idea is
that the human eye is much less sensitive to high-frequency detail, so JPEG throws away a lot of that information, and what's left gets compressed
further. The result is smaller files, but with a loss of quality—hence 'lossy' compression. I mean seriously, how do you even figure that out? How do
you know what to throw away and what to keep? Like, I conceptually understand our brain is pretty good at filling in the blanks, but still. You'd
think images would sometimes come out uncanny looking, but they really don't. If it hasn't been run through the wringer too many times, it looks like
the original image just at a substantially smaller size.

What blows my mind is how the standard strikes this balance between quality and size. Sure, there are better lossless formats like PNG, but the
trade-off JPEG offers for day-to-day use is incredible. It laid the groundwork for web performance and digital media as we know it today. The fact
that it’s survived decades of technological advancement with relatively few changes is a testament to its genius, even if newer formats like WebP or
AVIF try to dethrone it. I mean, even I've tried to come up with a better way to compress images, but dang, it's hard.

Also, reading about the legal battles around JPEG's patent licensing back in the 90s was wild. It almost didn’t take off because of all the legal
drama. The problem stemmed from the fact that some parts of the JPEG format were patented by a company called Forgent Networks. In 2002, they actually
started suing companies using JPEG, demanding royalties. This led to a lot of lawsuits, and for a while, it seemed like JPEG's widespread use could be
jeopardized. It wasn’t until years later that the patent claims were invalidated, but the situation showed just how fragile technology adoption can
be, even when something is widely used.

The whole origin of the format is extremely human and could have only come from years of collaboration and competition. It’s a great example of how
technology is shaped by the people who make it, not just the code itself.
The amount of stuff we use on a day-to-day basis that's just a bunch of abstractions of algorithms is wild. Same thing goes with QR Codes, but that's
a different rabbit hole for another day.

If you're interested in learning more about JPEG, check out the [Wikipedia](https://en.wikipedia.org/wiki/JPEG) page on JPEG. It's a great place to
read the history and some technical details of the format. Additionally, in the photography
space, [The Real Truth About JPEG Images](https://www.michaelfurtman.com/jpeg_myths.htm) is a really insightful article that about the practical
aspects and common misconceptions about using JPEG in photography.

--- 
Side Note: This train of thought came about when I decided to read a bit about the format while walking my dog, and got too invested in the history. I
ended up walking like 4 miles because I got so sucked into the rabbit hole of images. I'm not even mad, I learned a lot.

If somebody could make an app that could read wiki articles to me and quiz me on them, I'd be unstoppable.