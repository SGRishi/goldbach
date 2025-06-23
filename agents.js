// Basic scrollymation agent system
const agents = {
  scene1: {
    onEnter() {
      document.getElementById('scene1').classList.add('active');
    },
    onExit() {
      document.getElementById('scene1').classList.remove('active');
    }
  },
  scene2: {
    onEnter() {
      document.getElementById('scene2').classList.add('active');
    },
    onExit() {
      document.getElementById('scene2').classList.remove('active');
    }
  },
  scene3: {
    onEnter() {
      document.getElementById('scene3').classList.add('active');
    },
    onExit() {
      document.getElementById('scene3').classList.remove('active');
    }
  },
  scene4: {
    onEnter() {
      document.getElementById('scene4').classList.add('active');
      if (typeof window !== 'undefined' && window.drawPrimeTriangle) {
        window.drawPrimeTriangle();
      }
    },
    onExit() {
      document.getElementById('scene4').classList.remove('active');
    }
  },
  scene5: {
    onEnter() {
      document.getElementById('scene5').classList.add('active');
    },
    onExit() {
      document.getElementById('scene5').classList.remove('active');
    }
  },
  scene6: {
    onEnter() {
      document.getElementById('scene6').classList.add('active');
    },
    onExit() {
      document.getElementById('scene6').classList.remove('active');
    }
  },
  scene7: {
    onEnter() {
      document.getElementById('scene7').classList.add('active');
    },
    onExit() {
      document.getElementById('scene7').classList.remove('active');
    }
  },
  scene8: {
    onEnter() {
      document.getElementById('scene8').classList.add('active');
    },
    onExit() {
      document.getElementById('scene8').classList.remove('active');
    }
  },
  scene9: {
    onEnter() {
      document.getElementById('scene9').classList.add('active');
    },
    onExit() {
      document.getElementById('scene9').classList.remove('active');
    }
  },
  scene10: {
    onEnter() {
      document.getElementById('scene10').classList.add('active');
    },
    onExit() {
      document.getElementById('scene10').classList.remove('active');
    }
  },
  scene11: {
    onEnter() {
      document.getElementById('scene11').classList.add('active');
    },
    onExit() {
      document.getElementById('scene11').classList.remove('active');
    }
  }
};
if (typeof window !== "undefined" && typeof IntersectionObserver !== "undefined") {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const agent = agents[id];
      if (!agent) return;
      if (entry.isIntersecting) {
        agent.onEnter();
      } else {
        agent.onExit();
      }
    });
  }, { threshold: 0.6 });

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".scene").forEach(sec => observer.observe(sec));
  });
}

if (typeof module !== "undefined") {
  module.exports = agents;
}
