export const animating = (x, y, scale, opacity, dur, del, num) => {
    return {
      initial: { x: x, y: y, scale: scale, opacity: opacity },
      whileInView: { once: num, x: 0, y: 0, scale: 1, opacity: 1 },
      viewport: { once: num, amount: 0.5, margin: '100px' },
      transition: { duration: dur, delay: del },
    }
  }