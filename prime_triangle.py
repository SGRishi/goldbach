import matplotlib.pyplot as plt
import math

# generate first several primes
def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    r = int(math.sqrt(n)) + 1
    for i in range(3, r, 2):
        if n % i == 0:
            return False
    return True

primes = []
num = 2
while len(primes) < 15:  # 5 rows (1+2+3+4+5=15)
    if is_prime(num):
        primes.append(num)
    num += 1

# Build rows
offsets = [0]
for i in range(1, 6):
    offsets.append(offsets[-1] + i)
rows = []
start = 0
for i in range(1, 6):
    rows.append(primes[start:start+i])
    start += i

fig, ax = plt.subplots(figsize=(6, 4))
ax.axis('off')
for r, row in enumerate(rows):
    for c, val in enumerate(row):
        ax.text(-r*0.5+c, -r, str(val), fontsize=14, ha='center')
ax.set_xlim(-3, 3)
ax.set_ylim(-5, 1)
plt.tight_layout()
plt.show()
