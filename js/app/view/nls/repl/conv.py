#!/usr/bin/env python
import fileinput

for line in fileinput.input("Paintings.js", inplace=True):
    x = 5
    if fileinput.filelineno() > 12:
        if fileinput.filelineno()%2 == 0:
            x = x-1
        line.replace("eX","e" + str(fileinput.filelineno()+x))
        line.replace("cX","c" + str(fileinput.filelineno()+x))


    # print "%d: %s" % (fileinput.filelineno(), line)
