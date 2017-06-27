#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import with_statement
import urllib
import cgi, cgitb, sys, re, datetime, shlex #, MySQLdb
import subprocess
cgitb.enable()
form = cgi.FieldStorage()

# function for cmd
def cmdExe(cmd):
    import subprocess
    #Run the command
    args = shlex.split(cmd)
    p = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = p.communicate()
    return out


# This is the main function of this application it takes data and sets the field storage, this application monitors web servers by downloading the server status pages
# and modifying them to be displayed.

def getappdata(form):
    #move this down to


    #command the runs the counter shell script. This shell script counts the number of times


#Array that holds the site names. You can not add to it because it will make the Json it is returning to long and error out.
#To add to it make a copy of this file and fill the array with new data.

    test2 = ['AlfrescoCheck-server-status','AMSAD-server-status','BookMatrix-server-status','BVHealthCheck-server-status',
    'BVManager-server-status','CGAMFileSite-server-status','CGFileSite-server-status','CloudLogExtractor-server-status',
    'CommChangeTest-server-status','CommJump-server-status','CommPharm-server-status','CommPharmTest-server-status',
    'CommPortTest-server-status','CommSites-server-status','CommSitesTest-server-status',
    'CommTools-status']


    #This is the first part of the URL for reading the status pages
    test = 'https://commandcenter-qa.express-scripts.com/'


#This list holds the final formated json data it is also print getappdata(form) should return the same thing
    list = []

# This is the counters for the for loop that formats the json data.
    finalCount = 0
    finalCount2 = 0
    finalCount3 = 0

# This is the for loop that downloads the server status websites from the websites and formats it into json data
    for count, elem in enumerate(test2):

        counter = len(test2)

        stringcmd = str(count)
        cmdExe('/opt/httpd/app/qa/Mehaffey/10702/1.0/cgi-bin/counter1.2.sh 1 ' + stringcmd)

    # unix command that downloads the server status pages

        cmdExe('wget --no-check-certificate ' + test + test2[count] + ' -O /opt/httpd/app/qa/Mehaffey/10702/1.0/htdocs/Apache/'+ test2[count] +'.txt')

    # with that opens the file and loads it into a variable - is all ready split
        with open ("/opt/httpd/app/qa/Mehaffey/10702/1.0/htdocs/Apache/"+ test2[count] +".txt", "r") as myfile:
            data=myfile.readlines()
        test3 = []
        test3 = cmdExe('curl -k -I https://commandcenter-qa.express-scripts.com/' + test2[count])

        data.append(test3)






    # For loop that serches for the data to be pulled and appened to the main list

        for item in data:

            if "503 Service" in item and finalCount2 == 0 and finalCount == 0 and finalCount3 == 0 :#0,0
                list.append("[{'name':'error','data':'error'}")
                list.append("{'name':'error','data':'error'}")
                list.append("{'name':'error','data':'error'}")
                list.append("{'name':'error','data':'error'}")
                list.append("{'name':'error','data':'error'}")
                finalCount += 1
                finalCount2 += 1

            elif "503 Service" in item and finalCount2 != 0 and finalCount != 0 and finalCount3 != 0:


                list.append("{'name':'error','data':'error'}")
                list.append("{'name':'error','data':'error'}")
                list.append("{'name':'error','data':'error'}")
                list.append("{'name':'error','data':'error'}")
                list.append("{'name':'error','data':'error'}")


            if "Current Time:" in item and finalCount == 0:
                currentTime = item
                currentTime = currentTime.lstrip('<dt>')
                currentTime = currentTime.strip() #stops hidden line
                currentTime = currentTime.rstrip('EDT</dt>')
                currentTime = currentTime.split(': ')
                list.append("[{'name':'%s','data':'%s'}" % (currentTime[0],currentTime[1]))#always use double quotes when formating json data
                finalCount += 1
                finalCount2 += 1
                finalCount3 += 1

            elif "Current Time:" in item and finalCount != 0 :
                currentTime = item
                currentTime = currentTime.lstrip('<dt>')
                currentTime = currentTime.strip()
                currentTime = currentTime.rstrip('EDT</dt>')
                currentTime = currentTime.split(': ')
                list.append("{'name':'%s','data':'%s'}" % (currentTime[0],currentTime[1]))
                finalCount3 += 1

            if "Server uptime:" in item:
                serverUptime = item
                serverUptime = serverUptime.lstrip('<dt>')
                serverUptime = serverUptime.strip()
                serverUptime = serverUptime.rstrip('</dt>')
                serverUptime = serverUptime.split(': ')
                list.append("{'name':'%s','data':'%s'}" % (serverUptime[0],serverUptime[1]))

            if "Restart Time" in item:
                restarttime = item
                restarttime = restarttime.lstrip('<dt>')
                restarttime = restarttime.strip()
                restarttime = restarttime.rstrip('</dt>')
                restarttime = restarttime.split(': ')
                list.append("{'name':'%s','data':'%s'}" % (restarttime[0],restarttime[1]))

            #Total access is not accurate. To get around this I read that counter file
            # and load it into a variable and subtract the contents of it.
            if "Total accesses:" in item:
                with open ("/opt/httpd/app/qa/Mehaffey/10702/1.0/cgi-bin/Counter1/counter" + stringcmd + ".txt", "r") as myfile2:
                    data2=myfile2.readlines()

                for item2 in data2:
                    item3 = item2

                totalAccesses = item
                totalAccesses = totalAccesses.lstrip('<dt>')
                totalAccesses = totalAccesses.strip()
                totalAccesses = totalAccesses.rstrip('</dt>')
                totalAccesses = totalAccesses.split(' - ')
                totalAccesses2 = totalAccesses[0]
                totalAccesses2 = totalAccesses2.split(': ')
                compharm = int(totalAccesses2[1])
                totalAccesses2[1] = int(totalAccesses2[1]) - (int(item3) * 2)


                if int(totalAccesses2[1]) < 0:
                    cmdExe('/opt/httpd/app/qa/Mehaffey/10702/1.0/cgi-bin/eraseCounter1.2.sh 1 ' + stringcmd)
                    with open ("/opt/httpd/app/qa/Mehaffey/10702/1.0/cgi-bin/Counter1/counter" + stringcmd + ".txt", "r") as myfile2:
                        data2=myfile2.readlines()
                    for item2 in data2:
                        item3 = item2
                    totalAccesses2[1] = int(totalAccesses2[1]) - (int(item3) * 2)
                list.append("{'name':'%s','data':'%s'}" % (totalAccesses2[0],totalAccesses2[1]))


            if "CPU Usage:" in item:
                cpuUsage = item
                cpuUsage = cpuUsage.lstrip('<dt>')
                cpuUsage = cpuUsage.strip()
                cpuUsage = cpuUsage.rstrip('</dt>')
                cpuUsage = cpuUsage.split(': ')
                list.append("{'name':'%s','data':'%sd'}" % (cpuUsage[0],cpuUsage[1]))

                #not fireing
            if "requests/sec" in item and finalCount < counter and finalCount2 < counter :
                requestsSec = item
                requestsSec = requestsSec.lstrip('<dt>')
                requestsSec = requestsSec.strip()
                requestsSec = requestsSec.rstrip('</dt>')
                requestsSec = requestsSec.split('second')
                list.append("{'name':'Data: %s','data':'%sts'}" % (requestsSec[0],requestsSec[1]))
                finalCount += 1
                finalCount3 += 1
                finalCount2 += 1

            elif "requests/sec" in item: #1,1 notrun
                requestsSec = item
                requestsSec = requestsSec.lstrip('<dt>')
                requestsSec = requestsSec.strip()
                requestsSec = requestsSec.rstrip('</dt>')
                requestsSec = requestsSec.split('second')
                list.append("{'name':'Data: %s','data':'%sts'}" % (requestsSec[0],requestsSec[1]))

            if "503 Service" in item and finalCount2 < counter and finalCount < counter and finalCount3 < counter:
                list.append("{'name':'error','data':'error'}")

                finalCount2 += 1
                finalCount3 += 1

            elif "503 Service" in item: #1,1 notrun

                list.append("{'name':'error','data':'error'}")


# Joins the main list with commas

    list = ",".join(list)
    list = list + "]"
    return list

# Test for debuging the formated json data
print getappdata(form)

def textify(value): return '%s' % value
def htmlify(value): return '%s' % value
def jsonify(value):
    newvalue = value.replace('\'', '"')         # replace single quotes with double quotes
    newvalue = newvalue.replace('&#39;', '\'')  # insert single quotes back into the strings
    return newvalue

test = {
    'G':getappdata
    }


returnType = 'application/json'
if form.getvalue('S'): returnType = 'text/plain'
if form.getvalue('T'): returnType = 'text/plain'
if form.getvalue('H'): returnType = 'text/html'
if form.getvalue('J'): returnType = 'application/json'

if form.getvalue('USR'): userLogin(form)

print 'Content-type: %s; charset=utf-8' % returnType
print # must have this print. If removed it  will break this application
if form.getvalue('S'):
    print textify(test[form.getvalue('S')](form))
elif form.getvalue('T'):
    print textify(test[form.getvalue('T')](form))
elif form.getvalue('H'):
    print htmlify(test[form.getvalue('H')](form))
elif form.getvalue('U'):
    print test[form.getvalue('U')](form)
else:
    print jsonify('%s' % test[form.getvalue('J')](form))
