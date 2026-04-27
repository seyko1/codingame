import sys

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

# w: width of the building.
# h: height of the building.
w, h = [int(i) for i in input().split()]
n = int(input())  # maximum number of turns before game over.
x0, y0 = [int(i) for i in input().split()]

x = x0
y = y0
y_min = x_min = 0
y_max = h-1
x_max = w-1

while True:
    bomb_dir = input()  # the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    print(f"bomb_dir: {bomb_dir}", file=sys.stderr, flush=True)

    d1 = bomb_dir[0]
    d2 = bomb_dir[1] if len(bomb_dir) > 1 else ''

    if d1 == 'R' or d2 == 'R':
        x_min =  x + 1
    if d1 == 'L' or d2 == 'L':
        x_min = x - 1
    if d1 == 'U':
        y_max = y - 1
    if d1 == 'D':
        y_min = y + 1

    print(f"x_min: {x_min}", file=sys.stderr, flush=True)
    print(f"x_max: {x_max}", file=sys.stderr, flush=True)
    print(f"y_min: {y_min}", file=sys.stderr, flush=True)
    print(f"y_max: {y_max}", file=sys.stderr, flush=True)

    x = (x_min + x_max) // 2
    y = (y_min + y_max) // 2

    # the location of the next window Batman should jump to.
    print(str(x) + " " + str(y))