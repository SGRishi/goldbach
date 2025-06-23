````markdown
# Goldbach Conjectures: Weak vs Strong
Early in the journey, we distinguish two related statements:

> **Weak Goldbach Conjecture**  
> “Every odd number greater than 5 can be written as the sum of three primes.”  
> $$N_{\mathrm{odd}} = p_1 + p_2 + p_3$$

> **Strong Goldbach Conjecture**  
> “Every even number greater than 2 can be written as the sum of two primes.”  
> $$N_{\mathrm{even}} = p_1 + p_2$$

Knowing which form is proven at each milestone helps anchor our narrative: the weak conjecture was resolved in 2013 (Helfgott), while the strong conjecture remains open.

```markdown
# Context & Story Overview

This scrollymation guides viewers through the 300‑year saga of Goldbach’s Conjecture.  We interleave dramatic historical vignettes with mathematical visuals.  Below are the narrative beats and instructions for recreating each scene:

---

## 1. Opening Scene: Winter 1954, Xiamen Air Raid Shelter
- **Description:**  
  - A cold coastal night; distant artillery flashes light up storm clouds.  
  - Air‑raid sirens wail across Xiamen; panicked crowds rush into concrete bunkers.  
  - In a dim alcove, **21‑year‑old Chen Jingrun** reads by kerosene lamp, unfazed by the chaos.  
- **Recreation Instructions:**  
  1. **Background Plate:** Film or animate a stormy skyline with periodic muzzle flashes.  
  2. **SFX:** Mix wailing siren loops with muffled explosions and crowd chatter.  
  3. **Character Silhouette:** Silhouette Chen over a glowing page, flicker timed to lamp.  
  4. **Transition:** Dolly‑in on Chen’s eyes, dissolve into the next mathematical graphic.

---

## 2. High School Lesson & the Teacher’s Proclamation
- **Description:**  
  - A  classroom scene in 1949 China; a teacher writes on a chalkboard.  
  - He declares:  
    > “Mathematics is the queen of the sciences.  Number theory is the queen’s crown, and the Goldbach Conjecture is the pearl on the crown.”  
  - Classmates laugh—only young Chen remains silent, determined.  
- **Recreation Instructions:**  
  1. **Set Dressing:** Vintage classroom desks, map of China on wall.  
  2. **Chalk Animation:** Teacher’s hand writes the quote in serif chalk font.  
  3. **Class Reaction:** 2‑3 background extras laugh, Chen stays stoic.  
  4. **Cue Chen’s Reflection:** Cross‑fade into his voiceover:  
    > “I did not laugh… I never forgot this lesson.”

---

## 3. Christian Goldbach’s 1742 Journey & Letter
- **Description:**  
  - Map animation: Prussia → Leipzig (Leibniz) → London (Bernoulli, Newton) → St. Petersburg.  
  - The 1742 letter margin:  
    > “It seems every integer > 2 can be written as the sum of three primes.”  
  - Euler’s handwritten reply restates the **strong form**:  
    > “Every even integer > 2 is the sum of two primes.”
- **Recreation Instructions:**  
  1. **Map Tween:** Draw curved paths between cities with pulsing dots.  
  2. **Letter Facsimiles:** Fade between scans of Goldbach’s and Euler’s manuscripts.  
  3. **Typewriter Text:** Animate English translation beneath each.

---

## 4. Proof: Counting Representations with h(N)
- **Description:**  
  - Introduce function **h(N)** as the *number of unordered prime-pairs* (p, q), with p ≤ q, such that p + q = N. Each representation is counted exactly once.  

  - **Examples:**  
    - h(4) = 1 (pair 2+2)  
    - h(20) = 2 (pairs 3+17 and 7+13)  

  - Noting that proving **h(N) ≥ 1** for all even N > 2 is precisely the Strong Goldbach Conjecture.
- **Recreation Instructions:**  
  1. **Definition Animation:** Display on-screen text with the definition of h(N).  
  2. **Example Highlights:**  
     - For N=4, highlight the pair (2,2) and show h(4)=1.  
     - For N=20, highlight (3,17) then (7,13), showing h(20)=2.  
  3. **Visual Transition:** Morph into the Prime‑Sum Pyramid lattice, where each intersection corresponds to one of the h(N) counts.
---

## 5. Hilbert’s 1900 Challenge & Counting H(n)
- **Description:**  
  - At the 1900 ICM in Paris, Hilbert lists Goldbach among 23 greatest problems.  
  - Mathematicians shift focus: not just existence, but **count** of representations, H(n).  
- **Recreation Instructions:**  
  1. **ICM Slide:** Vintage photo pan with Hilbert speaking.  
  2. **Equation Overlay:** Display “H(n) = # ways n = p + q” in elegant LaTeX chalk font.  
  3. **Bar Chart Spawn:** For small n, bars grow showing H(4), H(20), H(42)…

---

## 6. Ramanujan’s Letter & the Birth of the Circle Method
- **Description:**  
  - 1913: Ramanujan’s letter arrives at Cambridge; Hardy & Littlewood marvel at uncanny results.  
  - Introduction of the **circle method**, visualized as clocks on the complex unit circle.  
- **Recreation Instructions:**  
  1. **Letter Write‑On:** Fade in Ramanujan’s handwritten page.  
  2. **Portrait Cuts:** Brief appearances of Hardy and Littlewood.  
  3. **Clock Animation:** Summed phasors winding around, bursting at rational angles.

---

## 7. Vinogradov’s 1937 Breakthrough
- **Description:**  
  - Portrait of Ivan Vinogradov; announcement that all sufficiently large odd n = p₁+p₂+p₃.  
  - Bound N₀ illustrated shrinking over time in a timeline.  
- **Recreation Instructions:**  
  1. **Portrait Fade:** Bring Vinogradov’s photo into focus.  
  2. **Text Slide:** “Odd n ≥ N₀ is sum of three primes” appears; animate N₀ descending.

---

## 8. Chen Jingrun’s “1+2” Theorem & Cultural Revolution
- **Description:**  
  - 1966: Chen proves every large even is prime + (prime or semiprime).  
  - Montage of Cultural Revolution: struggle sessions, Chen’s hardship, secret lamp‑lit work.  
- **Recreation Instructions:**  
  1. **Equation Callout:** “Even n ≥ M ⇒ n = p + (q or q₁q₂)” in bold.  
  2. **Historical Footage Style:** Grainy reenactment of struggle sessions, screaming crowd.  
  3. **Secret Work:** Show Chen scribbling at night under a flicker.

---

## 9. Helfgott’s 2013 Proof of the Weak Conjecture
- **Description:**  
  - Harald Helfgott refines circle‑method bounds and computer‑verifies up to ~8.8×10³⁰.  
  - Title card: “The Ternary Goldbach Conjecture is True.”  
- **Recreation Instructions:**  
  1. **Paper Title:** Animate Helfgott’s paper title; microphone drop sound.  
  2. **Computer Montage:** Terminal windows flicker as code runs to 8.8×10³⁰.

---

## 10. Modern Computational Verifications & Goldbach’s Comet
- **Description:**  
  - Nils Pipping’s hand‑check to 100k → modern CPU cluster to 4×10¹⁸.  
  - Plot of H(n) vs. n resembling a comet.  
- **Recreation Instructions:**  
  1. **Timeline Bar:** Marks 1938→2002→2025 with verification milestones.  
  2. **Plot Reveal:** Draw Goldbach’s comet curve; animate data points lighting up.

---

## 11. Conclusion & the Ongoing Quest
- **Description:**  
  - Despite centuries of progress, the **strong** conjecture remains open.  
  - Call‑to‑action: “Will you find the missing pearl?”  
- **Recreation Instructions:**  
  1. **Chalkboard Fade‑In:** Elegant question in chalk font.  
  2. **Share Buttons:** Fade up GitHub, BOINC, social icons with bounce.

---

# Agents for Scrollymation

Define one agent per section above.  Each agent triggers on scroll to its section ID, animates the described elements in `onEnter`, and cleans up in `onExit`.

*(Individual agent definitions follow in a separate file `agents.md`.)*
````
