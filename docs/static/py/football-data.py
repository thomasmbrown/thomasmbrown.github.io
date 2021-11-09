import csv
from typing import TYPE_CHECKING

data = []
games = []

with open('static/py/epl-2021-GMTStandardTime-2.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter = ',', quotechar = '|')
    for row in reader:
        data.append(row)

        
for row in data:
    if data.index(row) == 0:
        continue
    games.append(row[4:7])

teams = []

for g in games:
    if g[0] not in teams:
        teams.append(g[0])
    
    if g[1] not in teams:
        teams.append(g[1])
    
    if len(teams) == 20:
        break

teams = sorted(teams)

results = [ [] for i in range(0, 20)]

for g in games:
    if g[2] != '':

        HTeam = g[0]
        ATeam = g[1]
        HTeamIndex = teams.index(HTeam)
        ATeamIndex = teams.index(ATeam)
        Score = g[2].split()
        HGoals = int(Score[0])
        AGoals = int(Score[2])
        HPoints = 0
        APoints = 0

        if HGoals > AGoals:
            HPoints = 3
        elif AGoals > HGoals:
            APoints = 3
        else:
            HPoints = 1
            APoints = 1

        results[HTeamIndex].append([ATeamIndex, 'H', HPoints, HGoals, AGoals])
        results[ATeamIndex].append([HTeamIndex, 'A', APoints, HGoals, AGoals])
    
def compare(A, B):

    AScore = [0, 0, 0]
    BScore = [0, 0, 0]

    AGames = []
    BGames = []

    for ar in results[A]:
        for br in results[B]:
            if ar[:2] == br[:2]:
                for i in range(0, 3):
                    AScore[i] += ar[2 + i]
                    BScore[i] += br[2 + i]
                AGames.append(ar)
                BGames.append(br)
    
    if AScore > BScore:
        return A
    elif BScore > AScore:
        return B
    else:
        return -1


for i in range(0, 20):
    for j in range(0, 20):
        if compare(i, j) > -1:
            print(teams[i], teams[j], teams[compare(i, j)])

print(" ")

for i in range(0, 20):
    betterThan = 0
    sameAs = 0
    worseThan = 0
    for j in range(0, 20):
        if compare(i, j) == i:
            betterThan += 1
        elif compare(i, j) == -1:
            sameAs += 1
        else:
            worseThan += 1
    print(teams[i], betterThan, sameAs, worseThan)

table = []

for A in range(0, 20):
    pts = 0
    for B in range(0, 20):
        if A == B:
            continue
        if compare(A, B) == A:
            pts += 2
        elif compare(A, B) == -1:
            pts += 1
    table.append([pts, A])

table = sorted(table)[::-1]

print(" ")

for row in table:
    print(row[0], teams[row[1]])

print(" ")

for row in table:
    for other in table:
        if table.index(row) < table.index(other):
            if row[0] == other[0]:
                print(row[1], teams[row[1]], other[1], teams[other[1]], compare(row[1], other[1]))

print(" ")

for row in table:
    print('<li onmouseleave = "resetLeague()" onmouseenter = "compare(this)" id = "' + str(row[1]) + '">', teams[row[1]], '<span style = "float: right;">', row[0], "</li>")

print(" ")

print("W = [")
for i in range(0, 20):
    w = []
    for j in range(0, 20):
        if compare(i, j) == i:
            w.append(j)
    print(str(w) + ',')
print('];')

print("L = [")
for i in range(0, 20):
    w = []
    for j in range(0, 20):
        if compare(i, j) == j:
            w.append(j)
    print(str(w) + ',')
print('];')