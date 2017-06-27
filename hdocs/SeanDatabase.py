#!/usr/bin/env python
# -*- coding: utf-8 -*-
import cgi, cgitb; cgitb.enable()
form = cgi.FieldStorage()
def dbConnDict(cmd):
    import MySQLdb
    rows = []
    db = MySQLdb.connect(db='exptools', read_default_file='/home/httpd/.my.cnf')
    cursor = db.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute(cmd)
    db.commit()
    rows = cursor.fetchall()
    return rows

def getTable(form):
    list = []
    if form.getvalue('query'):
        sites = dbConnDict("SELECT * FROM cars")
    return sites

test = {'table':getTable }

if form.getvalue('S'):
    message=test[form.getvalue('S')](form)
    print "Content-type: text/html"
    print
    print message
if form.getvalue('J'):
    def jsonify(value): return value.replace('\"', '').replace('\'', '"').replace('datetime.datetime', '"datetime.datetime').replace('), ', ')", ')
    message=test[form.getvalue('J')](form)
    print "Content-type: application/json"
    print
    print jsonify('%s' % message)
