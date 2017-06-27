#!/usr/bin/env bash
arg1 = $1
arg2 = $2
value=`cat /opt/httpd/app/qa/Mehaffey/10702/1.0/cgi-bin/Counter$1/counter$2.txt`
value2=0
echo $value2  >/opt/httpd/app/qa/Mehaffey/10702/1.0/cgi-bin/Counter$1/counter$2.txt
echo $value2
